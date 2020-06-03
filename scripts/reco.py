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
                        #champion = str(lista[valores][valor][var1])
                        if str(var1) == 'name':
                            nome = str(lista[valores][valor][var1])
                        if str(var1) == 'spells':
                            #print (eval(str(lista[valores][valor][var1])).__len__())
                            for var2 in eval(str(lista[valores][valor][var1])):
                                abi = eval(str(var2))['id']
                                cool = eval(str(var2))['cooldown']
                                cost = eval(str(var2))['cost']      
                                description = eval(str(var2))['description'] 
                                ida = eval(str(var2))['id']
                                name = eval(str(var2))['name']
                                nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                                co = str(cool)[1:-1] 
                                cost = str(cost)[1:-1] 
                                if(not(champions.__contains__(abi))):
                                    print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + abi)
                                    print(":" + abi, "rdf:type owl:NamedIndividual ,")
                                    print("                         :Ability  ;")
                                    print('                :hasAbilityImage :' + abi + 'Image ;' )
                                    print('                :cooldown "' + str(co) + '" ;' )
                                    print('                :cost "' + str(cost) + '" ;' )
                                    print('                :description "' + description + '" ;' )
                                    print('                :id "' + ida + '" ;' )
                                    print('                :name "' + name + '" ^^xsd:string .' )
                                    champions.append(nome)
                            #if str(var2) == 'blocks':
                                #if str(var3) == 'items':
                                    #for var4 in eval(str(lista[valores][valor][var1][var2][var3])):
                                        #an = eval(str(var4))['id']

                        #for var2 in lista[valores][valor][var1]:
                            #if str(var2) == 'id':
                                #id = str(lista[valores][valor][var1][var2])
                                #print(str(lista[valores][valor][var1][var2])
                               
                            
                i = i + 1
        
readFile()