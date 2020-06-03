# -*- coding: utf-8 -*-
import json
import re
import requests

champions = []

def readFile():
    with open('../datasets/item.json', encoding='utf-8') as f:
        data = json.loads(f.read())
    champion = ""
    nome = ""
    tags = ""
    buildFrom = ""
    flag = 0
    description = ""
    stats=""
    i = 0
    while i < len(data):
        lista = {}
        lista.update(data[i])
        #print(data[i])
        for valores in lista:
            if valores == 'data':
                for valor in lista[valores]:
                    v = valor
                    #print(v)
                    for var1 in lista[valores][valor]:
                        if str(var1) == 'name':
                            name = str(lista[valores][valor][var1])
                        if str(var1) == 'description':
                            description = str(lista[valores][valor][var1])
                        if str(var1) == 'tags':
                            tags = str(lista[valores][valor][var1])
                            #print(tags)
                        if str(var1) == 'stats':
                            stats = str(lista[valores][valor][var1])
                        if str(var1) == 'from':
                            buildFrom = str(lista[valores][valor][var1])
                            flag = 1
                            #print(buildFrom)
                            #nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                    if(not(champions.__contains__(v))):
                        #if len(buildFrom) == 0:
                            #print('ESTOU AQUI')
                            print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + v)
                            print("<http://www.tartesdajulia.com/ontologies/LeagueOfLegends#>" + v, "rdf:type owl:NamedIndividual ,")
                            if flag == 0:
                                print("                                                                           :Component ;")
                            else:
                                print("                                                                           :FullItem ;")
                                for buildf in eval(buildFrom):
                                 print("                :buildsFrom <http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + buildf + "> ;")
                                flag = 0
                            for tag in eval(tags):
                                print("                :hasItemTag :" + tag +";")
                            print("                :hasItemImage <http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + v + "Image> ;")
                            print('                :description "' + description +'";')
                            print('                :name "' + name +'";')
                            print("                :id " + v +' .')
                            champions.append(v)

                i = i + 1
        
readFile()