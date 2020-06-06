# -*- coding: utf-8 -*-
import json
import re
import requests

champions = []
items = []
other = []
alltips = []
enem = []
ta = []
reco = []
def readFile():
    with open('../datasets/champions/DrMundo.json', encoding='utf-8') as f:
        data = json.loads(f.read())
    champion = ""
    nome = ""
    abi = ""
    skin = ""
    tag = ""
    allytips = ""
    blurb = ""
    enemytips = ""
    key = ""
    lore = ""
    partype = ""
    title = ""
    i = 0
    while i < len(data):
        lista = {}
        lista.update(data[i])
        #print(data[i])
        for valores in lista:
            if valores == 'data':
                items = []
                other = []
                alltips = []
                enem = []
                ta = []
                reco = []
                for valor in lista[valores]:
                    for var1 in lista[valores][valor]:
                        #print(lista[valores][valor][var1])
                        if str(var1) == 'info':
                            info = str(lista[valores][valor][var1])
                        #champion = str(lista[valores][valor][var1])
                        if str(var1) == 'name':
                            nome = str(lista[valores][valor][var1])
                        if str(var1) == 'tags':
                            for var2 in eval(str(lista[valores][valor][var1])):
                                ta.append(str(var2))
                            #tag = str(lista[valores][valor][var1])
                        if str(var1) == 'blurb':
                            blurb = str(lista[valores][valor][var1])
                        if str(var1) == 'key':
                            key = str(lista[valores][valor][var1])
                        if str(var1) == 'allytips':
                            for var2 in eval(str(lista[valores][valor][var1])):
                                alltips.append(str(var2))
                            #allytips = str(lista[valores][valor][var1])
                        if str(var1) == 'enemytips':
                            for var2 in eval(str(lista[valores][valor][var1])):
                                enem.append(str(var2))
                            #enemytips = str(lista[valores][valor][var1])
                        if str(var1) == 'lore':
                            lore = str(lista[valores][valor][var1])
                        if str(var1) == 'partype':
                            partype = str(lista[valores][valor][var1])
                        if str(var1) == 'title':
                            title = str(lista[valores][valor][var1])
                        if str(var1) == 'skins':
                            for var2 in eval(str(lista[valores][valor][var1])):
                                items.append(eval(str(var2))['id'])
                                #print(var2)
                        if str(var1) == 'spells':
                            for var2 in eval(str(lista[valores][valor][var1])):
                                other.append(eval(str(var2))['id'])
                        if str(var1) == 'recommended':
                            #print (eval(str(lista[valores][valor][var1])).__len__())
                            for var2 in eval(str(lista[valores][valor][var1])):
                                reco.append(eval(str(var2))['title'])
                                #title = eval(str(var2))['title']
                                #print(title)
                                #print(abi)
                        #for var2 in lista[valores][valor][var1]:
                            #if str(var2) == 'id':
                                #id = str(lista[valores][valor][var1][var2])
                                #print(str(lista[valores][valor][var1][var2])
                    nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                    #a = tag.replace("'", '')[1:-1]
                    res = str(allytips)[1:-1] 
                    #all = allytips.replace("'", '')[1:-1]
                    enemy = enemytips.replace("", '')[1:-1]
                    if(not(champions.__contains__(nome))):
                            print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + nome)
                            print(":" + nome, "rdf:type owl:NamedIndividual ,")
                            print("                         :Champion ;")
                            for ot in other:
                                print("                :hasAbility :" +  ot + ";")
                            for recom in reco:
                                print("                :hasRecommended :" +  recom + ";")
                            print("                :hasChampionImage :" + nome + "Image ;")
                            print("                :hasInfo :" + nome + "Info ;")
                            for itemi in items:
                                print("                :hasSkin :" + itemi + " ;")
                            print("                :hasStat :" + nome + "Stats ;")
                            for t in ta:
                                print("                :hasTag :" + t + ";")
                            for tent in alltips:
                                #print(tent)
                                print('                :allytips "' + tent  + '" ;' )
                            print("                :blurb " +  '"' + blurb + '"^^xsd:string ;')
                            for en in enem:
                                print("                :enemytips " +  '"' + en +  '" ;')
                            print("                :key " +  '"' + key + '"^^xsd:positiveInteger ;')
                            print("                :lore " +  '"' + lore +  '" ;')
                            print('                :name ' + '"' + nome + '"^^xsd:string ;')
                            print("                :partype " +  '"' + partype +  '" ;')
                            print("                :title " +  '"' + title + '"^^xsd:string .')

                            champions.append(skin)
            i = i + 1
        
readFile()