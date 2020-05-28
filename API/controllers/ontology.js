var Ontology = module.exports;
const axios = require("axios");

function myNormalize(r) {
  return r.results.bindings.map((o) => {
    var novo = {};
    for (let [k, v] of Object.entries(o)) {
      novo[k] = v.value;
    }
    return novo;
  });
}

var prefixes = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX noInferences: <http://www.ontotext.com/explicit>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX lol: <http://www.tartesdajulia.com/ontologies/LeagueOfLegends#>
`;

var getLink = "http://localhost:7200/repositories/LeagueOfLegends" + "?query=";

Ontology.getClasses = async function () {
  var query = `select ?idClasse where {
        ?c a owl:Class .
        bind (STRAFTER(STR(?c),'#') AS ?idClasse).
    }`;
  var encoded = encodeURIComponent(prefixes + query);
  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};

Ontology.getIndividuals = async function (id) {
  var query = `select ?ind where {
        ?i a lol:${id} .
        bind (STRAFTER(STR(?i), '#') AS ?ind).
     } `;
  var encoded = encodeURIComponent(prefixes + query);

  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};

Ontology.getIndividual = async function (id) {
  var query = `select * where {
          lol:${id} ?p ?o .
          ?o a lol:Pessoa.
       } `;
  var encoded = encodeURIComponent(prefixes + query);

  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};

/*Ontology.getList = async function (req) {
  var query = `select ?f ?idFilme ?titulo ?duracao ?data ?lingua ?pop ?res where {
        ?f a c:Filme .
        ?f c:título ?titulo .
        ?f c:duração ?duracao .
        ?f c:dataLançamento ?data .
        ?f c:línguaOriginal ?lingua .
        bind(strafter(str(?f),'cinema#') as ?idFilme) .
        ?f c:popularidade ?pop .
        ?f c:resumo ?res .
    }`;
  var encoded = encodeURIComponent(prefixes + query);

  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};*/

/*async function getFilmeAtomica(idFilme) {
  var query = `select ?titulo ?duracao ?data ?lingua ?pop ?res where {
      c:${idFilme} a c:Filme .
      c:${idFilme} c:título ?titulo .
      c:${idFilme} c:duração ?duracao .
      c:${idFilme} c:dataLançamento ?data .
      c:${idFilme} c:línguaOriginal ?lingua .
      c:${idFilme} c:popularidade ?pop .
      c:${idFilme} c:resumo ?res .
    }`;
  var encoded = encodeURIComponent(prefixes + query);

  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
}*/
