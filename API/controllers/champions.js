var Champions = module.exports;
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

Champions.getChampions = async function () {
  var query = `select ?ind where {
        ?i a :Champion .
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

Champions.getChampion = async function (id) {
  var query = `select * where {
          lol:${idChamp} ?p ?o .
          ?o a owl:NamedIndividual.
       } `;
  var encoded = encodeURIComponent(prefixes + query);

  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};

Champions.getChampionAbilities = async function (idChamp) {
    var query = `select  ?abilities where {
                lol:${idChamp} a lol:Champion.
                lol:${idChamp} lol:hasAbility ?abilities
            } `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
}

Champions.getChampionAbilitiesFull = async function (idChamp) {
    var query = `select ?name ?description ?imagePath where {
                lol:${idChamp} a lol:Champion.
                lol:${idChamp} lol:hasAbility ?abilities.
                ?abilities lol:name ?name.
                ?abilities lol:hasImage ?image.
                ?image lol:path ?imagePath.
    			?abilities lol:description ?description.
            } `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
}


Champions.getChampionSkins = async function (idChamp) {
var query = `select  ?skins where {
                lol:${idChamp} a lol:Champion.
                lol:${idChamp} lol:hasSkin ?skins
            } `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionSkinsImages = async function (idChamp) {
    var query = `select ?imagePath where {
                    lol:${idChamp} a lol:Champion.
                    lol:${idChamp} lol:hasSkin ?skins.
                    ?skins lol:hasImage ?image.
                    ?image lol:path ?imagePath.
                } `;
        var encoded = encodeURIComponent(prefixes + query);
        try {
            var response = await axios.get(getLink + encoded);
            return myNormalize(response.data);
        } catch (e) {
            throw e;
        }
}

Champions.getChampionSkinsNames = async function (idChamp) {
    var query = `select ?name where {
                    lol:${idChamp} a lol:Champion.
                    lol:${idChamp} lol:hasSkin ?skins.
                    ?skins lol:name ?name
                } `;
        var encoded = encodeURIComponent(prefixes + query);
        try {
            var response = await axios.get(getLink + encoded);
            return myNormalize(response.data);
        } catch (e) {
            console.log(e)
            throw e;
        }
}

Champions.getChampionSkinsFull = async function (idChamp) {
    try {
        var skinNames   = await Champions.getChampionSkinsNames(idChamp);
        var skinImages  = await Champions.getChampionSkinsImages(idChamp);

        var skins = new Array(skinNames.length);

        for (let j = 0; j < skinImages.length; j+=3) {
            skinNumber = j/3
            skins[skinNumber] = {
                name:skinNames[skinNumber].name,
                loading:skinImages[j].imagePath,
                splash:skinImages[j+1].imagePath,
                tile:skinImages[j+2].imagePath
            } 
        }
        return skins;
      } catch (e) {
        throw e;
      }
}

Champions.getChampionInfo = async function (idChamp) {
    var query = `select  ?attack ?defense ?magic ?difficulty where {
        lol:${idChamp} a lol:Champion.
        lol:${idChamp} lol:hasInfo ?info .
        ?info lol:attack ?attack .
        ?info lol:defense ?defense .
        ?info lol:magic ?magic .
        ?info lol:difficulty ?difficulty .
     } `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionStats = async function (idChamp) {
    var query = `select ?type ?value where {
        lol:${idChamp} a lol:Champion.
        lol:${idChamp} lol:hasStat ?stats . 
        ?stats ?typeLong ?value 
        bind(strafter(str(?typeLong),'LeagueOfLegends#') as ?type)
        FILTER NOT EXISTS{ ?stats rdf:type ?value }

    } `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionAllyTips = async function (idChamp) {
    var query = `select  ?allytips where {
        lol:${idChamp} a lol:Champion.
        lol:${idChamp} lol:allytips ?allytips .
    } `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionEnemyTips = async function (idChamp) {
    var query = `select  ?enemytips where {
        lol:${idChamp} a lol:Champion.
        lol:${idChamp} lol:enemytips ?enemytips .
    } `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionCore = async function (idChamp) {
    var query = `select  ?name ?title ?lore ?partype where {
        lol:${idChamp} a lol:Champion.
        lol:${idChamp} lol:name ?name .
        lol:${idChamp} lol:title ?title .
        lol:${idChamp} lol:lore ?lore .
        lol:${idChamp} lol:partype ?partype .
    } `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionTags = async function (idChamp) {
    var query = `select  ?tag where {
        lol:${idChamp} a lol:Champion.
        lol:${idChamp} lol:hasTag ?tagLong .
        bind(strafter(str(?tagLong),'LeagueOfLegends#') as ?tag)
} `;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionRecommended = async function (idChamp) {
    var query = `select  ?recommended ?item where {
        lol:${idChamp} a lol:Champion.
        lol:${idChamp} lol:hasRecommended ?recommendedLong .
        bind(strafter(str(?recommendedLong),'LeagueOfLegends#') as ?recommended)
}`;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionRecommendedItems = async function (idChamp) {
    var query = `select ?item ?imagePath where {
        lol:${idChamp} a lol:Champion.
        lol:${idChamp} lol:hasRecommended ?recommended .
        ?recommended lol:hasItem ?itemLong.
        ?itemLong lol:hasImage ?image .
        ?image lol:path ?imagePath .
        bind(strafter(str(?itemLong),'LeagueOfLegends#') as ?item)
}`;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getChampionRecommendedFull = async function (idChamp) {
    try {
        var recommendedName   = await Champions.getChampionRecommended(idChamp);
        var recommendedItems          = await Champions.getChampionRecommendedItems(idChamp);
    
        var itemSet = {
          name:recommendedName,
          items:recommendedItems,
        };
        return itemSet;
      } catch (e) {
        throw e;
      }
}

Champions.getChampionFull = async function (idChamp) {
    try {
      var core          = await Champions.getChampionCore(idChamp);
      var abilities     = await Champions.getChampionAbilitiesFull(idChamp);
      var skins         = await Champions.getChampionSkinsFull(idChamp);
      var stats         = await Champions.getChampionStats(idChamp);
      var recommended   = await Champions.getChampionRecommendedFull(idChamp);
      var tags          = await Champions.getChampionTags(idChamp);
      var allyTips      = await Champions.getChampionAllyTips(idChamp);
      var enemyTips     = await Champions.getChampionEnemyTips(idChamp);
      var info          = await Champions.getChampionInfo(idChamp);
  
      var champ = {
        core:core,
        abilities:abilities,
        skins:skins,
        stats:stats,
        recommended:recommended,
        tags:tags,
        friendTips:allyTips,
        foeTips:enemyTips,
        infoNumbers:info
      };
      return champ;
    } catch (e) {
      throw e;
    }
};
  
Champions.getAbility = async function (idAbility) {
    var query = `select  ?name ?description ?imagePath where {
        lol:${idAbility} a lol:Ability.
        lol:${idAbility} lol:name ?name.
        lol:${idAbility} lol:description ?description.
        lol:${idAbility} lol:hasImage ?image.
        ?image lol:path ?imagePath
}`;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

Champions.getSkin = async function (idskin) {
    var query = `select  ?name ?imagePath where {
        lol:${idskin} a lol:ChampionSkins.
        lol:${idskin} lol:name ?name.
        lol:${idskin} lol:hasImage ?image.
        ?image lol:path ?imagePath
}`;
    var encoded = encodeURIComponent(prefixes + query);
    try {
        var response = await axios.get(getLink + encoded);
        return myNormalize(response.data);
    } catch (e) {
        throw e;
    }
}

