# -*- coding: utf-8 -*-
import json
import re
import requests

champions = []

def readFile():
    with open('../datasets/champions/Aatrox.json', encoding='utf-8') as f:
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
                        if str(var1) == 'image':
                            full = str(lista[valores][valor][var1]['full'])
                            group = str(lista[valores][valor][var1]['group'])
                            sprite = str(lista[valores][valor][var1]['sprite'])
                        if str(var1) == 'name':
                            nome = str(lista[valores][valor][var1])
                    nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                    if(not(champions.__contains__(nome))):
                            print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + nome + "Image")
                            print(":" + nome + "Image", "rdf:type owl:NamedIndividual ,")
                            print("                         :ChampionImage ;")
                            print("                :full " +  '"' + full  + '" ;' )
                            print("                :group " +  '"' + group + '" ;')
                            print("                :sprite " +  '"' + sprite +  '" ;')

                            champions.append(nome)
                i = i + 1
        
readFile()