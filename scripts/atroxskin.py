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
                        if str(var1) == 'name':
                            nome = str(lista[valores][valor][var1])
                        if str(var1) == 'skins':
                            #print (eval(str(lista[valores][valor][var1])).__len__())
                            for var2 in eval(str(lista[valores][valor][var1])):
                                abi = eval(str(var2))['id']
                                print(abi)
                                num = eval(str(var2))['num']
                                name = eval(str(var2))['name']
                                chromas = eval(str(var2))['chromas']
                                nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                                if(not(champions.__contains__(abi))):
                                        print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + nome + "Skins")
                                        print(":" + nome + "Skins", "rdf:type owl:NamedIndividual ,")
                                        print("                         :ChampionSkins ;")
                                        print('                :chromas "' + str(chromas) + '"^^xsd:boolean ; ')
                                        print('                :id ' + abi + ' ; ')
                                        print('                :name "' + name + '" ;')
                                        print('                :num ' + str(num) + ' . ')


                                        champions.append(nome)
                i = i + 1
        
readFile()