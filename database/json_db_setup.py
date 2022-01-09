import sqlite3
import json
 
def parse_movie_metadata(movie_json):
    """
    Parses movies from JSON and creates comprehensive JSON files for Firebase.
    """
    data_set = dict()
    genres_dict = dict()
    current_recommendation_scores = dict()
    decades_dict = dict()
    movies_dict = dict()
    actors_dict = dict()
    mock_user = dict()
    unswiped_movies = list()
    movies_swipe_status = dict()
    
    with open(movie_json) as file:
        top_250_data = json.load(file)

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
        unswiped_movies.append(formatted_title)
        curr_movie["title"] = movie["title"]
        movies_dict[formatted_title] = True
        # Massage genre data
        # Format is string of lowercase genres, separated by spaces
        genres_list = movie["genres"].split(", ")
        formatted_genre = ""
        for genre in genres_list:
            genre = genre.lower()
            genres_dict[genre] = 0
            movie_genres.append(genre)
        current_recommendation_scores[formatted_title] = 0
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
            actors_dict[formatted_name] = 0
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
        decades_dict[movie_decade] = 0
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

        # Add current movie to data set
        data_set[formatted_title] = curr_movie

    # Initialize user data state
    mock_user['unswiped_movies'] = unswiped_movies
    mock_user['actors'] = actors_dict
    mock_user['decades'] = decades_dict
    mock_user['genres'] = genres_dict
    mock_user['movie_swipe_state'] = movies_swipe_status
    mock_user['recommendation_scores'] = current_recommendation_scores
    data_set['user_userid'] = mock_user
    data_set['initial_user_db'] = mock_user

    with open('json_data.json', 'w') as outfile:
        json.dump(data_set, outfile)

if __name__ == "__main__":
    parse_movie_metadata("top_250_by_rating.json")
