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
                        if str(var1) == 'info':
                            attack = str(lista[valores][valor][var1]['attack'])
                            defense = str(lista[valores][valor][var1]['defense'])
                            magic = str(lista[valores][valor][var1]['magic'])
                            difficulty = str(lista[valores][valor][var1]['difficulty'])
                        if str(var1) == 'name':
                            nome = str(lista[valores][valor][var1])
                nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                if(not(champions.__contains__(nome))):
                        print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + nome + "Info")
                        print(":" + nome + "Info", "rdf:type owl:NamedIndividual ,")
                        print("                         :ChampionInfo ;")
                        print("                :attack " +  '"' + attack  + '"^^xsd:positiveInteger ;' )
                        print("                :defense " +  '"' + defense + '"^^xsd:positiveInteger ;')
                        print("                :difficulty " +  '"' + difficulty +  '"^^xsd:positiveInteger ;')
                        print("                :magic " +  '"' + magic +  '"^^xsd:positiveInteger ;')

                        champions.append(nome)
                i = i + 1
        
readFile()