import sqlite3
import json

def populate_database(movie_json):

    conn = conn = sqlite3.connect('top_250') 
    c = conn.cursor()
    
    with open("top_250_by_rating.json") as file:
        top_250_data = json.load(file)

    for movie in top_250_data["results"]:
        parse_movie_data(movie)
        # Massage title data
        # Format is lowercase title with no spaces
        
        c.execute("""
                CREATE TABLE IF NOT EXISTS movies
                ([movie_id] INTEGER PRIMARY KEY,
                [title] TEXT,
                [data] TEST)""")

    conn.commit()


def parse_movie_data(movie):
    title = movie["title"]
    title_list = title.split(" ")
    title = ""
    for title_word in title_list:
        title += title_word.lower()

    # Massage genre data
    # Format is string of lowercase genres, separated by spaces
    genres = movie["genres"]
    genres_list = genres.split(", ")
    genres = ""
    for genre in genres_list:
        genres += genre.lower() + " "

    # Massage actor data
    # Format is string of lowercase names with no spaces, separated by spaces
    actors = movie["stars"]
    actors_list = actors.split(", ")
    actors = ""
    for actor in actors_list:
        actor_names = actor.split(" ")
        truncated_name = ""
        for actor_name in actor_names:
            actor_name = actor_name.replace(".","")
            truncated_name += actor_name.lower()
        actors += truncated_name + " "
    
    # Massage year data
    # Format is four-digit string
    if movie["description"][1] == "I":
        year = movie["description"][5:9]
    else:
        year = movie["description"][1:5]

    # Combine data into a single string
    # Sample entry: "citizenkane drama mystery orsonwelles josephcotten 
    # dorothycomingore agnesmoorehead 1941"
    return f"{genres}{actors}{year}"