import sqlite3
import json

def populate_database(movie_json):
    conn = sqlite3.connect('top_250') 
    c = conn.cursor()

    # Set up 'movies' table in db
    c.execute('''
                CREATE TABLE IF NOT EXISTS movies
                (movie_id INTEGER PRIMARY KEY,
                title TEXT,
                metadata TEXT)
              ''')
    
    with open(movie_json) as file:
        top_250_data = json.load(file)

    id = 1
    for movie in top_250_data["results"]:
        title, data = parse_movie_metadata(movie)
        new_database_row = (id, title, data)

        c.execute(f''' INSERT INTO movies (movie_id, title, metadata)
                       VALUES (?, ?, ?)''', new_database_row)
        id += 1

    conn.commit()


def parse_movie_metadata(movie):
    """
    Parses movies from JSON into proper format for addition to db.
    Sample output: "("citizenkane", "drama mystery orsonwelles 
                    josephcotten dorothycomingore agnesmoorehead 1941")
    """
    # Massage title data
    # Format is lowercase title with no spaces
    title = movie["title"]
    title_list = title.split(" ")
    title = ''
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

    # Combine data into a single string and return
    return (title, f'{genres}{actors}{year}')

if __name__ == "__main__":
    populate_database("top_250_by_rating.json")
