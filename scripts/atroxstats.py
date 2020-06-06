# -*- coding: utf-8 -*-
import json
import re
import requests

champions = []

def readFile():
    with open('../datasets/champions/DrMundo.json', encoding='utf-8') as f:
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
                        if str(var1) == 'stats':
                            armor = str(lista[valores][valor][var1]['armor'])
                            armorperlevel = str(lista[valores][valor][var1]['armorperlevel'])
                            attackdamage = str(lista[valores][valor][var1]['attackdamage'])
                            attackdamageperlevel = str(lista[valores][valor][var1]['attackdamageperlevel'])
                            attackrange = str(lista[valores][valor][var1]['attackrange'])
                            attackspeed = str(lista[valores][valor][var1]['attackspeed'])
                            attackspeedperlevel = str(lista[valores][valor][var1]['attackspeedperlevel'])
                            crit = str(lista[valores][valor][var1]['crit'])
                            critperlevel = str(lista[valores][valor][var1]['critperlevel'])
                            hp = str(lista[valores][valor][var1]['hp'])
                            hpperlevel = str(lista[valores][valor][var1]['hpperlevel'])
                            hpregen = str(lista[valores][valor][var1]['hpregen'])
                            hpregenperlevel = str(lista[valores][valor][var1]['hpregenperlevel'])
                            movespeed = str(lista[valores][valor][var1]['movespeed'])
                            mp = str(lista[valores][valor][var1]['mp'])
                            mpperlevel = str(lista[valores][valor][var1]['mpperlevel'])
                            mpregen = str(lista[valores][valor][var1]['mpregen'])
                            mpregenperlevel = str(lista[valores][valor][var1]['mpregenperlevel'])
                            spellblock = str(lista[valores][valor][var1]['spellblock'])
                            spellblockperlevel = str(lista[valores][valor][var1]['spellblockperlevel'])
                        if str(var1) == 'name':
                            nome = str(lista[valores][valor][var1])
                nome = re.sub(r'[ \'.()–’]', '_', str(nome))
                if(not(champions.__contains__(nome))):
                        print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + nome + "Stats")
                        print(":" + nome + "Stats", "rdf:type owl:NamedIndividual ,")
                        print("                         :ChampionStats ;")
                        print("                :armor " +  '"' + armor  + '";' )
                        print("                :armorperlevel " +  '"' + armorperlevel + '" ;')
                        print("                :attackdamage " +  '"' + attackdamage +  '" ;')
                        print("                :attackdamageperlevel " +  '"' + attackdamageperlevel +  '" ;')
                        print("                :attackrange " +  '"' + attackrange  + '";' )
                        print("                :attackspeed " +  '"' + attackspeed + '" ;')
                        print("                :attackspeedperlevel " +  '"' + attackspeedperlevel +  '" ;')
                        print("                :crit " +  '"' + crit +  '" ;')
                        print("                :critperlevel " +  '"' + critperlevel  + '";' )
                        print("                :hp " +  '"' + hp + '" ;')
                        print("                :hpperlevel " +  '"' + hpperlevel +  '" ;')
                        print("                :hpregen " +  '"' + hpregen +  '" ;')
                        print("                :hpregenperlevel " +  '"' + hpregenperlevel  + '";' )
                        print("                :movespeed " +  '"' + movespeed + '" ;')
                        print("                :mp " +  '"' + mp +  '" ;')
                        print("                :mpperlevel " +  '"' + mpperlevel +  '" ;')
                        print("                :mpregen " +  '"' + mpregen +  '" ;')
                        print("                :mpregenperlevel " +  '"' + mpregenperlevel  + '";' )
                        print("                :spellblock " +  '"' + spellblock + '" ;')
                        print("                :spellblockperlevel " +  '"' + spellblockperlevel +  '" .')
                        

                        champions.append(nome)
                i = i + 1
        
readFile()