# API Documentation

### This API is the bridge between the interface and the ontology created. 

Runs on port 4001


## /ontology

    /ontology
        /classes
        /individuals

Provides information about the ontology such as classes, individuals etc...

## /champions

    /champions
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

## /items

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

    /runes
        /:id
            /isFromTree
            /image
        /fromTree
            /:id

Provides information and details about runes

## /summonerSpells

    /summonerSpells
        /:id
            /image
            
Provides information and details about summoner spells
