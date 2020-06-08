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
            for recommended in championsInfo[item]['recommended']:
                if recommended['map'] == 'SR' and recommended['mode'] == 'CLASSIC':
                    print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + recommended['title'])
                    print(":" + recommended['title'], "rdf:type owl:NamedIndividual ,")
                    print("                         :Recomended  ;")
                    for blocks in recommended['blocks']:
                        for items in blocks['items']:
                            print('                :hasItem :' + items['id'] + ' ;' )
                    print('                :champion "' + recommended['champion'] + '" ;' )
                    print('                :mode "' + recommended['mode'] + '" ;' )
                    print('                :title "' + recommended['title'] + '" .\n' )
