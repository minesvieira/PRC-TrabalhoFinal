# -*- coding: utf-8 -*-
import json
import re

champions = []


def readFile():
    with open('../datasets/runesReforged.json', encoding='utf-8') as f:
        data = json.loads(f.read())
    champion = ""
    nome = ""
    keyA = ""
    i = 0
    while i < len(data):
        lista = {}
        lista.update(data[i])
        # print(data[i])
        for valores in lista:
            if str(valores) == 'key':
                keyA = str(lista[valores])
            if str(valores) == 'slots':
                for valor in lista[valores]:
                   # print(valor['runes'])
                    for valor2 in valor['runes']:
                        ida = eval(str(valor2))['id']
                        key = eval(str(valor2))['key']
                        icon = eval(str(valor2))['icon']
                        longDesc = eval(str(valor2))['longDesc']
                        name = eval(str(valor2))['name']
                        shortDesc = eval(str(valor2))['shortDesc']
                        nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                        if(not(champions.__contains__(key))):
                            print('###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' + key + 'Image')
                            print(':' + key + 'Image rdf:type owl:NamedIndividual ,')
                            print('                         :Image ;')
                            print('                :path "/' + icon + '".\n')

                i = i + 1


readFile()
