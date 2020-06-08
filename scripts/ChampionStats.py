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
            print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + item + "Stats")
            print(":" + item + "Stats", "rdf:type owl:NamedIndividual ,")
            print("                         :ChampionStats ;")
            print("                :armor " +  '"' +                    str(championsInfo[item]['stats']['armor'                ])       + '";' )
            print("                :armorperlevel " +  '"' +            str(championsInfo[item]['stats']['armorperlevel'        ]) + '" ;')
            print("                :attackdamage " +  '"' +             str(championsInfo[item]['stats']['attackdamage'         ]) +  '" ;')
            print("                :attackdamageperlevel " +  '"' +     str(championsInfo[item]['stats']['attackdamageperlevel' ]) +  '" ;')
            print("                :attackrange " +  '"' +              str(championsInfo[item]['stats']['attackrange'          ])  + '";' )
            print("                :attackspeed " +  '"' +              str(championsInfo[item]['stats']['attackspeed'          ]) + '" ;')
            print("                :attackspeedperlevel " +  '"' +      str(championsInfo[item]['stats']['attackspeedperlevel'  ]) +  '" ;')
            print("                :crit " +  '"' +                     str(championsInfo[item]['stats']['crit'                 ]) +  '" ;')
            print("                :critperlevel " +  '"' +             str(championsInfo[item]['stats']['critperlevel'         ])  + '";' )
            print("                :hp " +  '"' +                       str(championsInfo[item]['stats']['hp'                   ]) + '" ;')
            print("                :hpperlevel " +  '"' +               str(championsInfo[item]['stats']['hpperlevel'           ]) +  '" ;')
            print("                :hpregen " +  '"' +                  str(championsInfo[item]['stats']['hpregen'              ]) +  '" ;')
            print("                :hpregenperlevel " +  '"' +          str(championsInfo[item]['stats']['hpregenperlevel'      ])  + '";' )
            print("                :movespeed " +  '"' +                str(championsInfo[item]['stats']['movespeed'            ]) + '" ;')
            print("                :mp " +  '"' +                       str(championsInfo[item]['stats']['mp'                   ]) +  '" ;')
            print("                :mpperlevel " +  '"' +               str(championsInfo[item]['stats']['mpperlevel'           ]) +  '" ;')
            print("                :mpregen " +  '"' +                  str(championsInfo[item]['stats']['mpregen'              ]) +  '" ;')
            print("                :mpregenperlevel " +  '"' +          str(championsInfo[item]['stats']['mpregenperlevel'      ])  + '";' )
            print("                :spellblock " +  '"' +               str(championsInfo[item]['stats']['spellblock'           ]) + '" ;')
            print("                :spellblockperlevel " +  '"' +       str(championsInfo[item]['stats']['spellblockperlevel'   ]) +  '" .\n')