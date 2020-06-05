# -*- coding: utf-8 -*-
import json
import re
import requests

champions = []
items = []

def readFile():
    with open('../datasets/champions/Ahri.json', encoding='utf-8') as f:
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
                items = []
                for valor in lista[valores]:
                    for var1 in lista[valores][valor]:
                        #champion = str(lista[valores][valor][var1])
                        if str(var1) == 'name':
                            nome = str(lista[valores][valor][var1])
                        if str(var1) == 'recommended':
                            #print (eval(str(lista[valores][valor][var1])).__len__())
                            for var2 in eval(str(lista[valores][valor][var1])):
                                title = eval(str(var2))['title']
                                champion = eval(str(var2))['champion']
                                mode = eval(str(var2))['mode']
                                blocks = eval(str(var2))['blocks']
                                for var3 in blocks:
                                    items.append(eval(str(var3))['items'])
                                nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                                if(not(champions.__contains__(title))):
                                    print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + title)
                                    print(":" + title, "rdf:type owl:NamedIndividual ,")
                                    print("                         :Recomended  ;")
                                    for itemi in items:
                                        for iteu in itemi:
                                            var = iteu['id']
                                            print('                :hasItem <http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' + var + '> ;' )
                                    print('                :champion "' + champion + '" ;' )
                                    print('                :mode "' + mode + '" ;' )
                                    print('                :title "' + title + '" .' )
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