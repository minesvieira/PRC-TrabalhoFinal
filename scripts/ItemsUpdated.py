# -*- coding: utf-8 -*-
import json
import re


# Reading data from the file
with open('../datasets/item.json', encoding='utf-8') as f:
    data = json.loads(f.read())


dict = {}
dict.update(data[0])
intoAndFrom = 0
control = 0

for value in dict:
    if value == 'data':
        # Get only the items stored on a new dict
        items = dict['data']
        # For each item in this new dict iterate
        for item in items.values():
            print('###  http://www.tartesdajulia.com/ontologies/LeagueOfLegends#' +
                  item['image']['full'][0: -4])
            print(':' +
                  item['image']['full'][0: -4] + ' rdf:type owl:NamedIndividual ,')
            if 'into' in item.keys():
                print(
                    "       :Component ;")
                for component in item['into']:
                    print("                :buildsInto :" + component + ";")
                intoAndFrom = 1
                control = 1
            if 'from' in item.keys():
                if intoAndFrom == 0:
                    print(
                        "       :FullItem ;")
                for component in item['from']:
                    print("                :buildsFrom :" + component+ ";")
                
                control = 1
            if control == 0:
                print(
                        "       :FullItem ;")
            control = 0
            intoAndFrom=0
            print(
                '                :hasImage :' + item['image']['full'][0: -4] + 'Image ;')
            print('                :description "' +
                  item['description'] + '";')
            for tag in item['tags']:
                print('                :hasItemTag :' + tag + ';')
            print('                :name "' + item['name'] + '";')
            print('                :id ' +
                  item['image']['full'][0: -4] + ' .\n')
