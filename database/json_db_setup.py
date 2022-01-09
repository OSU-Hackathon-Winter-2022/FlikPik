import sqlite3
import json
 
def parse_movie_metadata(movie_json):
    """
    Parses movies from JSON and creates comprehensive JSON files for Firebase.
    """
    data_set = dict()
    all_genres = set()
    unswiped_movies = list()
    all_movies = list()
    
    with open(movie_json) as file:
        top_250_data = json.load(file)
    
    for movie in top_250_data["results"]:
        # Create movie object from IMDb database response
        curr_movie = dict()
        curr_movie["id"] = movie["id"]
        curr_movie["title"] = movie["title"]
        curr_movie["runtime"] = movie["runtimeStr"]
        curr_movie["coverImageURL"] = movie["image"]
        curr_movie["stars"] = movie["stars"]
        curr_movie["genres"] = movie["genres"]
        curr_movie["rating"] = movie["contentRating"]
        curr_movie["score"] = movie["imDbRating"]
        curr_movie["plot"] = movie["plot"]
        
        # Massage year data
        # Format is four-digit string
        if movie["description"][1] == "I":
            movie_year = movie["description"][5:9]
        else:
            movie_year = movie["description"][1:5]
        curr_movie["year"] = movie_year

        # Massage title data
        # Format is lowercase title with no spaces
        title_list = movie["title"].split(" ")
        formatted_title = ""
        for title_word in title_list:
            formatted_title += title_word.lower()
        formatted_title = formatted_title.replace(".","")
        formatted_title = formatted_title.replace(":","")
        unswiped_movies.append(formatted_title)

        # Massage genre data
        # Format is string of lowercase genres, separated by spaces
        genres_list = movie["genres"].split(", ")
        for genre in genres_list:
            genre = genre.lower()
            all_genres.add(genre)

        all_movies.append(curr_movie)

    # Initialize data set genres
    data_set['genres'] = list(all_genres)

    # Initialize user data state
    mock_user = dict()
    mock_user['unswiped_movies'] = unswiped_movies
    mock_user['matched_movies'] = []
    mock_user['unmatched_movies'] = []
    data_set['user_userid'] = mock_user
    data_set['new_user_db'] = mock_user
    data_set['movies'] = all_movies

    with open('json_data_db_sub.json', 'w') as outfile:
        json.dump(data_set, outfile)

if __name__ == "__main__":
    parse_movie_metadata("top_250_by_rating.json")
