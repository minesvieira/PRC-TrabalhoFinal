import json
import re
import requests

champions = []

def readFile(file):
    with open(file) as f:
        data = json.load(f)
    champion = ""
    i = 0
    while i < len(data):
        lista = {}
        lista.update(data[i])
        for valores in lista:
            if valores == 'data':
                for valor in lista[valores]:
                    if valor == 'value':
                        champion = str(lista[valores][valor])
        champion = re.sub(r'[ \'.()–’]', '_', str(champion))
        if(not(champions.__contains__(champion))):
            print("###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#" + champion)
            print(":" + champion, "rdf:type owl:NamedIndividual ,")
            print("                         :Champion ;")
            print("                :hasAbility :AatroxQ ;")
            print("                :hasChampionImage :AatroxImage ;")
            print("                :hasInfo :AatroxInfo ;")
            print("                :hasStat :AatroxStats ;")
            print("                :hasTag :Fighter ,")
            print("                        :Tank ;")
            print("                :allytips ""Use Umbral Dash while casting The Darkin Blade to increase your chances of hitting the enemy, Crowd Control abilities like Infernal Chains or your allies immobilizing effects will help you set up The Darkin Blade, Cast World Ender when you are sure you can force a fight. ;")
            print("                :blurb ""Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...^^xsd:string ;")
            print("                :enemytips ""Aatrox's attacks are very telegraphed, so use the time to dodge the hit zones, \"Aatrox's Infernal Chains are easier to exit when running towards the sides or at Aatrox, Keep your distance when Aatrox uses his Ultimate to prevent him from reviving. ;")
            print("                :key "266"^^xsd:positiveInteger ;")
            print("                :lore" "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance. ;")
            print("                :name" + champion "^^xsd:string ;")   
            print("                :partype "Blood Well" ;")
            print("                :title "the Darkin Blade"^^xsd:string .")
            champions.append(champion)
        i = i + 1
        

readFile('../datasets/champion.json')