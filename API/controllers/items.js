var Item = module.exports;
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

Item.getItems = async function () {
  var query = `select  ?itemID ?name ?desc ?imagePath ?fullItem where {
    ?item a lol:Item.
    ?item lol:name ?name.
    ?item lol:description ?desc.
    ?item lol:hasImage ?image.
    ?image lol:path ?imagePath.
    bind(strafter(str(?item),'LeagueOfLegends#') as ?itemID)
    BIND( EXISTS { ?items a lol:FullItem } as ?fullItem )
}`;
  var encoded = encodeURIComponent(prefixes + query);
  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};


Item.getItemsTypes = async function () {
  var query = `select  ?itemID ?type  where {
    ?item a lol:Item.
    ?item lol:hasItemTag ?tag.
    ?tag lol:hasItemType ?typeLong.
    bind(strafter(str(?item),'LeagueOfLegends#') as ?itemID)
    bind(strafter(str(?typeLong),'LeagueOfLegends#') as ?type)
  } ORDER BY (?itemID)`;
  var encoded = encodeURIComponent(prefixes + query);
  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
};

Item.getItems2 = async function () {
  try {
    var items     = await Item.getItems();
    var types     = await Item.getItemsTypes();

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      items[i].type = []
      for (let j = 0; j < types.length; j++) {
        const type = types[j];
        if(item.itemID == type.itemID) {
          items[i].type.push(type.type)
        }
      }
    }
    var result = {
      item:items,
    };


    return result;
  } catch (e) {
    throw e;
  }
};


Item.getItem = async function (idItem) {
    try {
        var itemCore     = await Item.getItemCore(idItem);
        var BuildsFrom   = await Item.getItemBuildsFrom(idItem);
        var BuildsInto   = await Item.getItemBuildsInto(idItem);
        var image        = await Item.getItemImage(idItem);
        var tags         = await Item.getItemTag(idItem);
        var types        = await Item.getItemType(idItem);
        var item = {
          core:itemCore,
          buildsFrom:BuildsFrom,
          buildsInto:BuildsInto,
          itemTags:tags,
          itemTypes:types,
          image:image
        };

    
        return item;
      } catch (e) {
        throw e;
      }
}

Item.getItemImage = async function (idItem) {
    var query = `select ?imagePath where {
      lol:${idItem} a lol:Item.
      lol:${idItem} lol:hasImage ?image.
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

Item.getItemCore = async function (idItem) {
  var query = `select ?name ?desc ?imagePath where {
    lol:${idItem} a lol:Item.
    lol:${idItem} lol:name ?name.
    lol:${idItem} lol:description ?desc.
    lol:${idItem} lol:hasImage ?image.
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

Item.getItemBuildsInto = async function (idItem) {
    var query = `select ?item where {
        lol:${idItem} a lol:Item.
        lol:${idItem} lol:buildsInto ?itemLong.
        bind(strafter(str(?itemLong),'LeagueOfLegends#') as ?item)
} `;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Item.getItemBuildsFrom = async function (idItem) {
    var query = `select ?item where {
        lol:${idItem} a lol:Item.
        lol:${idItem} lol:buildsFrom ?itemLong.
        bind(strafter(str(?itemLong),'LeagueOfLegends#') as ?item)
} `;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Item.getItemTag = async function (idItem) {
    var query = `select ?tag where {
        lol:${idItem} a lol:Item.
        lol:${idItem} lol:hasItemTag ?tagLong.
        bind(strafter(str(?tagLong),'LeagueOfLegends#') as ?tag)
} `;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Item.getItemType = async function (idItem) {
    var query = `select ?type where {
        lol:${idItem} a lol:Item.
        lol:${idItem} lol:hasItemTag ?tag.
        ?tag lol:hasItemType ?typeLong.
        bind(strafter(str(?typeLong),'LeagueOfLegends#') as ?type)
} `;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Item.getDistinctItemTags = async function () {
    var query = `select distinct ?tag where {
        ?items a lol:Item.
        ?items lol:hasItemTag ?tagLong.
        bind(strafter(str(?tagLong),'LeagueOfLegends#') as ?tag)
    }`;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Item.getDistinctItemTypes = async function () {
    var query = `select distinct ?type where {
        ?items a lol:Item.
        ?items lol:hasItemTag ?tag.
        ?tag lol:hasItemType ?typeLong
        bind(strafter(str(?typeLong),'LeagueOfLegends#') as ?type)
    }`;
    var encoded = encodeURIComponent(prefixes + query);
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Item.getTagsbyType = async function () {
  var query = `select ?type ?tag where {
    ?tagLong a lol:ItemTag.
    ?tagLong lol:hasItemType ?typeLong.
    bind(strafter(str(?typeLong),'LeagueOfLegends#') as ?type)
    bind(strafter(str(?tagLong),'LeagueOfLegends#') as ?tag)
  }ORDER BY (?type)`;

  var encoded = encodeURIComponent(prefixes + query);
  try {
    var response = await axios.get(getLink + encoded);
    return myNormalize(response.data);
  } catch (e) {
    throw e;
  }
}

Item.getItemsByTag = async function (tag) {
    var query = `select ?name ?itemsid where {
        ?items a lol:Item.
        ?items lol:name ?name.
        ?items lol:hasItemTag lol:${tag}.
        bind(strafter(str(?items),'LeagueOfLegends#') as ?itemsid)
    }`;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};




Item.getItemsByType = async function (type) {
    var query = `select distinct ?itemID ?name ?desc ?imagePath ?fullItem  where {
      ?items a lol:Item.
      ?items lol:name ?name.
      ?items lol:hasItemTag ?tag.
    ?items lol:description ?desc.
    ?items lol:hasImage ?image.
    ?image lol:path ?imagePath.
      ?tag lol:hasItemType lol:${type}
      bind(strafter(str(?items),'LeagueOfLegends#') as ?itemID)
    BIND( EXISTS { ?items a lol:FullItem } as ?fullItem )
    }`;
    var encoded = encodeURIComponent(prefixes + query);
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Item.getFullItems = async function () {
    var query = `select ?itemsid ?name where {
        ?items a lol:Item.
        ?items lol:name ?name.
        bind(strafter(str(?items),'LeagueOfLegends#') as ?itemsid)
    FILTER EXISTS { ?items a lol:FullItem }
    }`;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};

Item.getItemComponents = async function () {
    var query = `select ?itemsid ?name where {
        ?items a lol:Item.
        ?items lol:name ?name.
        bind(strafter(str(?items),'LeagueOfLegends#') as ?itemsid)
    FILTER EXISTS { ?items a lol:Component }
    }`;
    var encoded = encodeURIComponent(prefixes + query);
  
    try {
      var response = await axios.get(getLink + encoded);
      return myNormalize(response.data);
    } catch (e) {
      throw e;
    }
};


