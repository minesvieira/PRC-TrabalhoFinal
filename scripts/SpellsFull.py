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
i = 0

for value in dict:
    if value == 'data':
        # Get only the champions stored on a new dict
        championsInfo = dict['data']
        # For each item in this new dict iterate
        # Meaning for each champion, get the skins
        for item in championsInfo:
            # championsInfo[item] gets the data for a specific champion
            for spells in championsInfo[item]['spells']:
                print(
                    '###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' + spells['id'])
                print(':' + spells['id'], 'rdf:type owl:NamedIndividual ,')
                if i == 3:
                    print('                         :Ultimate ;')
                else:
                    print('                         :Ability ;')
                print('                :hasImage :' +
                      spells['id'] + ' ;')
                print('                :cooldown "' +
                      str(spells['cooldown'])[1:-1] + '" ;')
                print('                :cost "' +
                      str(spells['cost'])[1:-1] + '" ;')
                print('                :description "' +
                      spells['description'] + '" ;')
                print('                :id "' + spells['id'] + '" ;')
                print('                :name "' +
                      spells['name'] + '"^^xsd:string .\n')
                i += 1
            print(
                '###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' + championsInfo[item]['passive']['image']['full'][0: -4])
            print(':' + championsInfo[item]['passive']['image']['full'][0: -4] +
                  ' rdf:type owl:NamedIndividual ,')
            print('                         :Passive ;')
            print('                :hasImage :' +
                  championsInfo[item]['passive']['image']['full'][0: -4] + 'Image ;')
            print('                :description "' +
                  championsInfo[item]['passive']['description'] + '" ;')
            print('                :name "' +
                  championsInfo[item]['passive']['name'] + '"^^xsd:string .\n')
            i = 0
