-- shows linked
SELECT tv_show_genres.genre_id AS genre, COUNT(tv_show_genres.show_id) AS number_of_shows FROM tv_show_genres JOIN tv_shows ON tv_show_genres.show_id = tv_shows.id GROUP BY tv_show_genres.genre_id HAVING COUNT(tv_show_genres.show_id) ORDER BY number_of_shows DESC;

