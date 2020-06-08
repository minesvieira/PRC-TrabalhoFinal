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
            print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + item)
            print(":" + item, "rdf:type owl:NamedIndividual ,")
            print("                         :Champion ;")
            print('                :hasAbility :' + item + 'Passive;')
            for ability in championsInfo[item]['spells']:
                print('                :hasAbility :' + ability['id'] + ';')
            for recommended in championsInfo[item]['recommended']:
                if recommended['map'] == 'SR' and recommended['mode'] == 'CLASSIC':
                    print("                :hasRecommended :" +
                      recommended['title'] + ";")
            print('                :hasImage :' + item + 'Image ;')
            print('                :hasInfo :' + item + 'Info ;')
            for skins in championsInfo[item]['skins']:
                print(
                    '                :hasSkin :' + skins['id'] + ' ;')
            print('                :hasStat :' + item + 'Stats ;')
            for tags in championsInfo[item]['tags']:
                print('                :hasTag :' + tags + ';')
            for allytips in championsInfo[item]['allytips']:
                print('                :allytips "' + allytips + '" ;')
            for enemytips in championsInfo[item]['enemytips']:
                print('                :enemytips "' + enemytips + '" ;')
            print('                :blurb ' + '"' +
                  championsInfo[item]['blurb'] + '"^^xsd:string ;')
            print('                :key "' +
                  championsInfo[item]['key'] + '"^^xsd:positiveInteger ;')
            print('                :lore "' +
                  championsInfo[item]['lore'] + '" ;')
            print('                :name "' +
                  championsInfo[item]['name'] + '"^^xsd:string ;')
            print('                :partype "' +
                  championsInfo[item]['partype'] + '" ;')
            print('                :title "' +
                  championsInfo[item]['title'] + '"^^xsd:string .\n')
