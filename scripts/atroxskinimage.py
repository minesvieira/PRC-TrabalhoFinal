# -*- coding: utf-8 -*-
import json
import re
import requests

champions = []

def readFile():
    with open('../datasets/champions/Akali.json', encoding='utf-8') as f:
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
                                num = eval(str(var2))['num']
                                name = eval(str(var2))['name']
                                chromas = eval(str(var2))['chromas']
                                #n = re.sub(r"[^\w\s]", '', name)
                                sentence = re.sub(r"\s+", "", name, flags=re.UNICODE)
                                if(not(champions.__contains__(abi))):
                                        print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + abi + "Image")
                                        print(":" + abi + "Image", "rdf:type owl:NamedIndividual ,")
                                        print("                         :SkinImage ;")
                                        '''print('                :full "' + full + '" ;' )
                                        print('                :sprite "' + sprite + '" ;' )
                                        print('                :group "' + group + '" .' )'''


                                        champions.append(nome)
                i = i + 1
        
readFile()