# -*- coding: utf-8 -*-
import json
import re
import requests

champions = []

def readFile():
    with open('../datasets/summoner.json', encoding='utf-8') as f:
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
                        if str(var1) == 'name':
                            name = str(lista[valores][valor][var1])
                        if str(var1) == 'description':
                            description = str(lista[valores][valor][var1])
                        if str(var1) == 'maxrank':
                            maxrank = str(lista[valores][valor][var1])
                        if str(var1) == 'id':
                            idA = str(lista[valores][valor][var1])
                        if str(var1) == 'cooldown':
                            cooldown = str(lista[valores][valor][var1])
                        if str(var1) == 'cooldownBurn':
                            cooldownBurn = str(lista[valores][valor][var1])
                        if str(var1) == 'cost':
                            cost = str(lista[valores][valor][var1])
                        if str(var1) == 'costBurn':
                            costBurn = str(lista[valores][valor][var1])
                        if str(var1) == 'key':
                            key = str(lista[valores][valor][var1])
                        if str(var1) == 'summonerLevel':
                            summonerLevel = str(lista[valores][valor][var1])
                            nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                            co = str(cooldown)[1:-1] 
                            cost = str(cost)[1:-1] 
                            if(not(champions.__contains__(name))):
                                    print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + name)
                                    print(":" + name, "rdf:type owl:NamedIndividual ,")
                                    print("                         :SummonerSpell ;")
                                    print("                         :hasSummonerImage :" + name + "Image ;")
                                    print('                         :cooldown "' + co + '" ;')
                                    print('                         :cooldownBurn ' + cooldownBurn + ' ;') 
                                    print('                         :cost "' + cost + '" ;')
                                    print('                         :costBurn ' + costBurn + ' ;') 
                                    print('                         :description "' + description + '" ;')
                                    print('                         :id "' + idA + '" ;')
                                    print('                         :key ' + key + ' ;')
                                    print('                         :maxrank ' + maxrank + ' ;')
                                    print('                         :name "' + name + '" ;')
                                    print('                         :summonerLevel ' + summonerLevel + ' .')
                                    champions.append(nome)

                    i = i + 1
        
readFile()