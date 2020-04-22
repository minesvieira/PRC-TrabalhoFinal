import json
import re
import requests

def readFile(file):
    with open(file) as f:
        data = json.load(f)

readFile('../datasets/champion.json')