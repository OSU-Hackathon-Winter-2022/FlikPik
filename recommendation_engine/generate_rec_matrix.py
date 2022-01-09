import sqlite3
import json
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

conn = sqlite3.connect('../database/SQLite db/top_250.db') 
c = conn.cursor()
movie_table = list(c.execute("SELECT * FROM movies ORDER BY movie_id ASC"))
c.close()

documents = []
imdb_to_id_map = {}
id_to_imdb_map = {}
for movie_id, imdb_id, title, metadata in movie_table:
    documents.append(metadata)
    imdb_to_id_map[imdb_id] = movie_id
    id_to_imdb_map[movie_id] = imdb_id

count_matrix = CountVectorizer().fit_transform(documents)
sim_matrix = cosine_similarity(count_matrix, count_matrix)

with open("./recommendation_config_top_250.json", 'w') as f:
    json.dump({"similarity-matrix": sim_matrix.tolist(), "imdb-to-id": imdb_to_id_map, "id-to-imdb": id_to_imdb_map}, f)