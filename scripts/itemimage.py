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
    i = 0
    while i < len(data):
        lista = {}
        lista.update(data[i])
        #print(data[i])
        for valores in lista:
            if valores == 'data':
                for valor in lista[valores]:
                    v = valor
                    for var1 in lista[valores][valor]:
                        if str(var1) == 'name':
                            name = str(lista[valores][valor][var1])
                        if str(var1) == 'description':
                            description = str(lista[valores][valor][var1])
                        if str(var1) == 'tags':
                            tags = str(lista[valores][valor][var1])
                        if str(var1) == 'image':
                            stats = str(lista[valores][valor][var1])
                            for var2 in lista[valores][valor][var1]:
                                if str(var2) == 'full':
                                    full = str(lista[valores][valor][var1][var2])
                                if str(var2) == 'sprite':
                                    sprite = str(lista[valores][valor][var1][var2])
                                if str(var2) == 'group':
                                    group = str(lista[valores][valor][var1][var2])
                            nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                            if(not(champions.__contains__(v))):
                                    print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + v + "Image")
                                    print("<http://www.tartesdajulia.com/ontologies/LeagueOfLegends#>" + v + "Image", "rdf:type owl:NamedIndividual ,")
                                    print("                                                                           :ItemImage ;")
                                    print('                :full "' + full + '" ;' )
                                    print('                :sprite "' + sprite + '" ;' )
                                    print('                :group "' + group + '" .' )
                                    champions.append(nome)

                i = i + 1
        
readFile()