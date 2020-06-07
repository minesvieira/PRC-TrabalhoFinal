# -*- coding: utf-8 -*-
import json
import re

champions = []
champion = ""

# Reading data from the file
with open('../datasets/championFull.json', encoding='utf-8') as f:
    data = json.loads(f.read())

nome = ""
# Creating a dict to save skin names and respective number
skinNames = {}
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
            champions.append(item)
            # print(championsInfo[item]['skins'])
            for skin in championsInfo[item]['skins']:
                # Adding to the previously created dict
                # The name of the skin is its key and the number is the value
                if skin['name'] == 'default':
                    defaultName = skin['name'] + item
                    skinNames[defaultName] = item + '_' + str(skin['num'])
                skinNames[skin['name']] = item + '_' + str(skin['num'])

for item in skinNames:
    print('###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' +
          skinNames[item] + 'Splash')
    print(':' + skinNames[item] + 'Splash',
          'rdf:type owl:NamedIndividual ,')
    print('                         :SplashImage ;')
    print('                :path "/splash/' +
          skinNames[item] + '.png" .\n')
    print('###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' +
          skinNames[item] + 'Loading')
    print(':' + skinNames[item] + 'Loading',
          'rdf:type owl:NamedIndividual ,')
    print('                         :LoadingImage ;')
    print('                :path "/loading/' +
          skinNames[item] + '.png" .\n')
    print('###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' +
          skinNames[item] + 'Tile')
    print(':' + skinNames[item] + 'Tile',
          'rdf:type owl:NamedIndividual ,')
    print('                         :TileImage ;')
    print('                :path "/tiles/' +
          skinNames[item] + '.png" .\n')
