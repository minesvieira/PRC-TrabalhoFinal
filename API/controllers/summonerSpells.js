var Summoner = module.exports;
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

var getLink = "http://localhost:7200/repositories/LoLDEVELOPMENT" + "?query=";

Summoner.getSummoners = async function () {
  var query = `select ?summ ?name ?desc ?path where {
    ?summ a lol:SummonerSpell.
    ?summ lol:name ?name.
    ?summ lol:description ?desc .
    ?summ lol:hasImage ?image.
    ?image lol:full ?path .
}`;
  var encoded = encodeURIComponent(prefixes + query);
  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};

Summoner.getSummoner = async function (idSumm) {
    var query = `select ?summ ?name ?desc ?path where {
      lol:${idSumm} a lol:SummonerSpell.
      lol:${idSumm} lol:name ?name.
      lol:${idSumm} lol:description ?desc .
      lol:${idSumm} lol:hasImage ?image.
      ?image lol:full ?path .
  }`;
    var encoded = encodeURIComponent(prefixes + query);
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
  };

Summoner.getSummonerImage = async function (idSumm) {
    var query = `select ?imagePath where {
      lol:${idSumm} a lol:SummonerSpell.
      lol:${idSumm} lol:hasImage ?image.
      ?image lol:full ?imagePath.
  } `;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
  };
