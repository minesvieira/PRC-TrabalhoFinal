# API Documentation

### This API is the bridge between the interface and the ontology created. 

Runs on port 4001


## /ontology

    /ontology
        /classes
        /individuals

Provides information about the ontology such as classes, individuals etc...

## /champions

    /champion
        /:id
            /skins
            /abilities
            /recommended
            /images
            /tags
            /info 
            /details
            /tips 
            /full -> Full details about a champion
        /abilities 
            /:id 
        /skins
            /:id

Provides information and details about champions or a specific champion.

## /item

    /items
        /:id
            /buildsInto
            /buildsFrom
            /image
        /components
        /fullItems
        /image
        /itemTag
            /:tag
        /itemType
            /:type
        /tags
        /types

Provides information and details about items

## /runes

    /rune
        /:id
            /isFromTree
            /image
        /fromTree
            /:id

Provides information and details about runes

## /summonerSpells

    /summoner
        /:id
            /image
            
Provides information and details about summoner spells
