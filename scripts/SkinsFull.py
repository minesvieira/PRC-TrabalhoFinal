# -*- coding: utf-8 -*-
import json
import re

champions = []
champion = ""

# Reading data from the file
with open('../datasets/championFull.json', encoding='utf-8') as f:
    data = json.loads(f.read())

nome = ""

dict = {}
dict.update(data)
championsInfo = {}


for value in dict:
    if value == 'data':
        # Get only the champions stored on a new dict
        championsInfo = dict['data']
        # For each item in this new dict iterate
        # Meaning for each champion, get the skins
        for item in championsInfo:
            # championsInfo[item] gets the data for a specific champion
            for skins in championsInfo[item]['skins']:
                individual = item+'_'+str(skins['num'])
                print(
                    '###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' + skins['id'])
                print(':Skin' + skins['id'], 'rdf:type owl:NamedIndividual ,')
                print('                         :ChampionSkins ;')
                print('                :hasImage :' +
                      individual + 'Splash ;')
                print('                :hasImage :' +
                      individual + 'Loading ;')
                print('                :hasImage :' +
                      individual + 'Tile ;')
                print('                :chromas "' +
                      str(skins['chromas']) + '"^^xsd:boolean ; ')
                print('                :id "Skin' + skins['id'] + '" ; ')
                print('                :name "' + skins['name'] + '" ;')
                print('                :num ' + str(skins['num']) + ' .\n')
