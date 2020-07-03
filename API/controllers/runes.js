var Rune = module.exports;
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

Rune.getRunes = async function () {
  var query = `select ?runeID ?name ?desc ?imagePath ?tree where {
    ?rune a lol:Rune.
    ?rune lol:name ?name.
    ?rune lol:longDesc ?desc.
    ?rune lol:hasImage ?image.
    ?image lol:path ?imagePath.
    ?rune lol:isFromTree ?treeLong.
    bind(strafter(str(?treeLong),'LeagueOfLegends#') as ?tree)
    bind(strafter(str(?rune),'LeagueOfLegends#') as ?runeID)
}`;
  var encoded = encodeURIComponent(prefixes + query);
  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};

Rune.getRunesByTree = async function (idTree) {
  var query = `select ?runeID ?name ?desc ?imagePath where {
    ?rune a lol:Rune.
    ?rune lol:name ?name.
    ?rune lol:longDesc ?desc.
    ?rune lol:hasImage ?image.
    ?image lol:path ?imagePath.
    ?rune lol:isFromTree lol:${idTree}.
    bind(strafter(str(?rune),'LeagueOfLegends#') as ?runeID)
}`;
  var encoded = encodeURIComponent(prefixes + query);
  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};

var fs = require('fs')

Rune.getRuneWithTree = async function () {
  try {
      var Domination = await Rune.getRuneTree('Domination');
      var Precision = await Rune.getRuneTree('Precision');
      var Inspiration = await Rune.getRuneTree('Inspiration');
      var Resolve = await Rune.getRuneTree('Resolve');      
      var Sorcery = await Rune.getRuneTree('Sorcery');

      var result = {
        Domination : Domination,
        Precision : Precision,
        Inspiration : Inspiration,
        Resolve : Resolve,
        Sorcery : Sorcery,
      }
      return result;
    } catch (e) {
      throw e;
    }
}

Rune.getRuneImage = async function (idRune) {
    var query = `select ?imagePath where {
      lol:${idRune} a lol:Rune.
      lol:${idRune} lol:hasImage ?image.
      ?image lol:path ?imagePath.
  } `;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
  };

Rune.getRuneCore = async function (idRune) {
  var query = `select ?name ?shortDesc ?longDesc ?imagePath ?runeTree where {
    lol:${idRune} a lol:Rune.
    lol:${idRune} lol:name ?name .
    lol:${idRune} lol:hasImage ?image.
    ?image lol:path ?imagePath.
    lol:${idRune} lol:isFromTree ?tree . 
    lol:${idRune} lol:shortDesc ?shortDesc.
    lol:${idRune} lol:longDesc ?longDesc.
    bind(strafter(str(?tree),'LeagueOfLegends#') as ?runeTree)
} `;
  var encoded = encodeURIComponent(prefixes + query);

  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};


Rune.getRuneTreeFrom = async function (idRune) {
    var query = `select ?tree ?runeTree where {
        lol:${idRune} a lol:Rune.
        lol:${idRune} lol:isFromTree ?tree . 
        bind(strafter(str(?tree),'LeagueOfLegends#') as ?runeTree)
    }`;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Rune.getFullRunes = async function (type) {
    var query = `select ?itemsid ?name where {
        ?items a lol:Rune.
        ?items lol:name ?name.
        bind(strafter(str(?items),'LeagueOfLegends#') as ?itemsid)
    FILTER EXISTS { ?items a lol:FullRune }
    }`;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Rune.getTrees = async function () {
  var query = `select ?runeTree where {
    ?runeTreeLong a lol:RuneTree . 
    bind(strafter(str(?runeTreeLong),'LeagueOfLegends#') as ?runeTree)
}`;
  var encoded = encodeURIComponent(prefixes + query);

  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};


Rune.getRuneTree = async function (idTree) {
    var query = `select ?runeID ?name ?desc ?imagePath where {
        ?rune a lol:Rune.
        ?rune lol:name ?name.
        ?rune lol:longDesc ?desc.
        ?rune lol:hasImage ?image.
        ?image lol:path ?imagePath.
        ?rune lol:isFromTree lol:${idTree} . 
        bind(strafter(str(?rune),'LeagueOfLegends#') as ?runeID)
    }`;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

