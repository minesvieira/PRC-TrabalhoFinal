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
            print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + abi)
            print(":" + abi, "rdf:type owl:NamedIndividual ,")
            print("                         :ChampionSkins ;")
            print("                :hasSkinImage :" + abi + "Image ;")
            print('                :chromas "' +
                  str(chromas) + '"^^xsd:boolean ; ')
            print('                :id ' + abi + ' ; ')
            print('                :name "' + name + '" ;')
            print('                :num ' + str(num) + ' . ')
