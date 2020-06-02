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
                        if str(var1) == 'image':
                            #print (eval(str(lista[valores][valor][var1])).__len__())
                            for var2 in eval(str(lista[valores][valor][var1])):
                                if str(var2) == 'full':
                                    full = str(lista[valores][valor][var1][var2])
                                if str(var2) == 'sprite':
                                    sprite = str(lista[valores][valor][var1][var2])
                                if str(var2) == 'group':
                                    group = str(lista[valores][valor][var1][var2])
                                    #abi = eval(str(var2))['full']
                                nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                                if(not(champions.__contains__(name))):
                                        print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + name + "Image")
                                        print(":" + name + "Image", "rdf:type owl:NamedIndividual ,")
                                        print("                         :AbilityImage ;")
                                        print("                :full " +  '"' + full  + '" ;' )
                                        champions.append(nome)

                    i = i + 1
        
readFile()