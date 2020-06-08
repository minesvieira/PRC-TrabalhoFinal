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
            print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + item + "Info")
            print(":" + item + "Info", "rdf:type owl:NamedIndividual ,")
            print("                         :ChampionInfo ;")
            print("                :attack " +  '"' + str(championsInfo[item]['info']['attack'])  + '"^^xsd:positiveInteger ;' )
            print("                :defense " +  '"' + str(championsInfo[item]['info']['defense']) + '"^^xsd:positiveInteger ;')
            print("                :difficulty " +  '"' + str(championsInfo[item]['info']['difficulty']) +  '"^^xsd:positiveInteger ;')
            print("                :magic " +  '"' + str(championsInfo[item]['info']['magic']) +  '"^^xsd:positiveInteger .\n')