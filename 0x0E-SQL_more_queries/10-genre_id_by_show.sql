-- tv shows no.9
SELECT tv_shows.title, tv_show_genres.genre_id FROM tv_show_genres JOIN tv_shows ON tv_show_genres.genre_id = tv_shows.id ORDER BY tv_shows.title, tv_show_genres.genre_id ASC;
