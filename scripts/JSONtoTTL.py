# -*- coding: utf-8 -*-
import json
import re
import requests

champions = []

def readFile():
    with open('../datasets/champion.json', encoding='utf-8') as f:
        data = json.loads(f.read())
    champion = ""
    nome = ""
    i = 0
    while i < len(data):
        lista = {}
        lista.update(data[i])
        #print(data[i])
        for valores in lista:
            if valores == 'data':
                for valor in lista[valores]:
                    for var1 in lista[valores][valor]:
                        #print(lista[valores][valor][var1])
                        if str(var1) == 'info':
                            info = str(lista[valores][valor][var1])
                            print(str(lista[valores][valor][var1]['attack']))
                        #champion = str(lista[valores][valor][var1])
                        if str(var1) == 'name':
                            nome = str(lista[valores][valor][var1])
                            print(nome)
                        if str(var1) == 'tags':
                            tag = str(lista[valores][valor][var1])
                            print(tag)
                        if str(var1) == 'blurb':
                            blurb = str(lista[valores][valor][var1])
                            print(blurb)
                        if str(var1) == 'key':
                            key = str(lista[valores][valor][var1])
                            print(key)
                        
                nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                if(not(champions.__contains__(nome))):
                        print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + nome)
                        print(":" + nome, "rdf:type owl:NamedIndividual ,")
                        print("                         :Champion ;")
                        print("                :hasAbility :AatroxQ ;")
                        print("                :hasChampionImage :AatroxImage ;")
                        print("                :hasInfo :AatroxInfo ;")
                        print("                :hasStat :AatroxStats ;")
                        print("                :hasTag :" + tag)
                        print("                :allytips ""Use Umbral Dash while casting The Darkin Blade to increase your chances of hitting the enemy, Crowd Control abilities like Infernal Chains or your allies immobilizing effects will help you set up The Darkin Blade, Cast World Ender when you are sure you can force a fight. ;")
                        print("                :blurb " + blurb + "^^xsd:string ;")
                        print("                :enemytips ""Aatrox's attacks are very telegraphed, so use the time to dodge the hit zones, \"Aatrox's Infernal Chains are easier to exit when running towards the sides or at Aatrox, Keep your distance when Aatrox uses his Ultimate to prevent him from reviving. ;")
                        print("                :key " + key + " ^^xsd:positiveInteger ;")
                        champions.append(nome)
                i = i + 1
        
readFile()