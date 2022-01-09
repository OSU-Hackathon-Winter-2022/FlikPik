#! /usr/bin/env python3

import json


def generateGenres():

    with open('top_250_by_rating.json', encoding="utf-8") as f:
        data = json.load(f)


    genreList = []
    counter = 0

    for i in data['results']:
        genreList.append(data['results'][counter]['genres'])

        counter += 1


    newList = [word for line in genreList for word in line.split()]
    newnewList = set(newList)

    return newnewList
