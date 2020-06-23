# Things to do

- [x] Extract champion info

- [x] Complete ontology
    - [x] Create All Champions
    - [x] Create All Skins
    - [x] Create individuals for all ChampionImages
        - [x] Connect skin individuals to its image individual
    - [x] Create all abilities
        - [x] Create all ability images
    - [x] Create all items
        - [x] Create all item images
    - [x] Create Runes
        - [x] Create Rune images
        - [?] Checking rune images name (spaces and underscores)
    - [x] Create Summoner spells
        - [x] Create summoner spell images
    - [x] Create all ChampionInfo
    - [x] Create all ChampionStats
    - [x] Create all Recommended Itemsets
        - [x] Connect recommended item sets to the champion
    - [x] Make sure itemTags are constrained in the specific itemType.
    - [x] Passives are not correctly created on champion relation :hasAbility
    - [x] Fix Item image colliding with skin image
    - [x] Check if ontology is complete
    

- [x] Make API
    - [x] Controllers
        - [x] Ontology
        - [x] Champions
        - [x] Items
        - [x] Runes
        - [x] SummonerSpells
    - [x] Routes
        - [x] Ontology
            - [x] Champions
            - [x] Items
            - [x] Runes
            - [x] SummonerSpells

- [ ] Make Interface
    - [x] Display grid of champions
        - [x] Make it clickable and so it redirects to individual champion page
    - [x] Individual champion page
        - [ ] Make it dynamic (Showing skins, altering background)
    - [ ] Show rune trees as trees
    - [ ] Show items
        - [ ] Filter by itemTag and itemType
        - [ ] Show buildpaths for items (buildsInto and buildsFrom)
    

