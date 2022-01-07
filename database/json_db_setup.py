import sqlite3
import json
 
def parse_movie_metadata(movie_json):
    """
    Parses movies from JSON and creates comprehensive JSON files for addition to Firebase.
    """
    data_set = dict()
    genres_dict = dict()
    actors_dict = dict()
    decades_dict = dict()
    movies_dict = dict()
    
    with open(movie_json) as file:
        top_250_data = json.load(file)

    movies_swipe_status = dict()

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
        formatted_title = formatted_title.replace(".","")
        formatted_title = formatted_title.replace(":","")
        movies_swipe_status[formatted_title] = False
        curr_movie["title"] = movie["title"]
        movies_dict[formatted_title] = True
        # Massage genre data
        # Format is string of lowercase genres, separated by spaces
        genres_list = movie["genres"].split(", ")
        formatted_genre = ""
        for genre in genres_list:
            genre = genre.lower()
            genres_dict[genre] = {"mock_user_id" : 0}
        movie_genres.append(genre)
        curr_movie["genres"] = movie_genres
        curr_movie["genres_text"] = movie["genres"]

        # Massage actor data
        # Format is string of lowercase names with no spaces, separated by spaces
        actors_list = movie["stars"].split(", ")
        for actor in actors_list:
            actor_names = actor.split(" ")
            formatted_name = ""
            for actor_name in actor_names:
                actor_name = actor_name.replace(".","")
                formatted_name += actor_name.lower()
            data_set[formatted_name] = {"mock_user_id" : 0}
            movie_actors.append(formatted_name)
        curr_movie["actors"] = movie_actors
        curr_movie["actors_text"] = movie["stars"]

        # Massage year data
        # Format is four-digit string
        if movie["description"][1] == "I":
            movie_decade = movie["description"][5:8] + "0"
            movie_year = movie["description"][5:9]
        else:
            movie_decade = movie["description"][1:4] + "0"
            movie_year = movie["description"][1:5]
        decades_dict[movie_decade] = {"mock_user_id" : 0}
        curr_movie["decade"] = movie_decade
        curr_movie["year"] = movie_year

        # Massage rating data
        # Format is string
        curr_movie["rating"] = movie["imDbRating"]

        # Massage Runtime data
        # Format is string
        curr_movie["runtime"] = movie["runtimeStr"] + "utes"

        # Add content Rating 
        curr_movie["content_rating"] = movie["contentRating"]

        # Add Metacritic Rating
        curr_movie["metacritic_rating"] = movie["metacriticRating"]

        # Add IMDb Rating
        curr_movie["imdb_rating"] = movie["imDbRating"]

        # # Add movie iage
        curr_movie["image_url"] = movie["image"]

        # Add IMDb ID
        curr_movie["imdb_id"] = movie["id"]

        # Add movie plot
        curr_movie["plot"] = movie["plot"]

        # Has movie been swiped on yet?
        curr_movie["swiped_on"] = False

        # Was movie swiped 'yes' on
        curr_movie["swipe_direction"] = True

        # Current movie recommendation score
        curr_movie["recommendation_score"] = {"mock_user_id" : 0}

        # Add current movie to data set
        data_set[formatted_title] = curr_movie

        # Swiped on movies
        data_set["movies_swiped_on"] = list()

        # Swiped on actors

    data_set['decades'] = decades_dict
    data_set['genres'] = genres_dict
    data_set['movie_titles'] = movies_dict
    data_set['movie_swipe_state'] = movies_swipe_status

    data_set['users'] = {"mock_user_id" : "user_info", "movie_swipe_state" : movies_swipe_status}

    with open('json_data.json', 'w') as outfile:
        json.dump(data_set, outfile)

    return data_set

if __name__ == "__main__":
    parse_movie_metadata("top_250_by_rating.json")
