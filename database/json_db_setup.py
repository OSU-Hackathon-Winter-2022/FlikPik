import sqlite3
import json
 
def parse_movie_metadata(movie_json):
    """
    Parses movies from JSON and creates comprehensive JSON files for addition to Firebase.
    """
    data_set = dict()

    with open(movie_json) as file:
        top_250_data = json.load(file)

    movies_dict = dict()

    for movie in top_250_data["results"]:
        movie_genres = list()
        movie_actors = list()
        curr_movie = dict()

        # Massage title data
        # Format is lowercase title with no spaces
        title_list = movie["title"].split(" ")
        formatted_title = ""
        for title_word in title_list:
            formatted_title += title_word.lower()
        data_set[formatted_title] = 0
        movies_dict[formatted_title] = False

        # Massage genre data
        # Format is string of lowercase genres, separated by spaces
        genres_list = movie["genres"].split(", ")
        formatted_genre = ""
        for genre in genres_list:
            genre = genre.lower()
            data_set[genre] = 0
        movie_genres.append(genre)
        curr_movie["genres"] = movie_genres

        # Massage actor data
        # Format is string of lowercase names with no spaces, separated by spaces
        actors_list = movie["stars"].split(", ")
        for actor in actors_list:
            actor_names = actor.split(" ")
            formatted_name = ""
            for actor_name in actor_names:
                actor_name = actor_name.replace(".","")
                formatted_name += actor_name.lower()
            data_set[formatted_name] = 0
            movie_actors.append(formatted_name)
        curr_movie["actors"] = movie_actors

        # Massage year data
        # Format is four-digit string
        if movie["description"][1] == "I":
            movie_decade = movie["description"][5:8] + "0"
        else:
            movie_decade = movie["description"][1:4] + "0"
        data_set[movie_decade] = 0
        curr_movie["decade"] = movie_decade

        data_set[formatted_title] = curr_movie

    data_set['movies'] = movies_dict
    with open('json_data.json', 'w') as outfile:
        json.dump(data_set, outfile)

    return data_set

if __name__ == "__main__":
    parse_movie_metadata("top_250_by_rating.json")
