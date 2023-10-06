const pool = require("../config");

// Function untuk membuat huruf awal kapital (digunakan saat mencari film berdasarkan kategori)
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// handler ketika tidak ada parameter pada api
const noParams = (req, res) => {
  return res.status(200).send({ message: "Ping was successful!" });
};

// handler untuk menampikan seluruh list film
const getFilm = (req, res) => {
  pool.query("SELECT * FROM film ORDER BY film_id ASC", (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    return res.status(200).json(results.rows);
  });
};

// handler untuk menampilkan film berdasarkan ID
const getFilmById = (req, res) => {
  const id = req.params.id;

  pool.query(`SELECT * FROM film WHERE film_id = ${id}`, (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    } else if (results.rows.length == 0) {
      return res
        .status(404)
        .json({ message: `Sorry we couldn't find film with id ${id}` });
    } else {
      return res.status(200).json(results.rows);
    }
  });
};

// handler untuk menampilkan film berdasarkan kategori
const getFilmByCategory = (req, res) => {
  const category = capitalizeFirstLetter(req.params.category);

  pool.query(
    `SELECT film.film_id AS id, film.title AS title, film.description AS description, 
    film.last_update AS film_last_update,category.name AS category, 
    category.last_update AS category_last_update FROM film JOIN film_category
    ON film.film_id = film_category.film_id JOIN category ON film_category.category_id =
    category.category_id WHERE category.name = '${category}'
    `,
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      } else if (results.rows.length == 0) {
        return res.status(404).json({
          message: `Sorry we couldn't find films with category ${category}`,
        });
      } else {
        return res.status(200).json(results.rows);
      }
    }
  );
};

// handler untuk menambahkan film baru
const addFilm = (req, res) => {
  const {
    film_id,
    title,
    description,
    release_year,
    language_id,
    rental_duration,
    rental_rate,
    length,
    replacement_cost,
    rating,
    special_features,
    fulltext,
  } = req.body;

  if (
    !film_id ||
    !title ||
    !description ||
    !release_year ||
    !language_id ||
    !rental_duration ||
    !rental_rate ||
    !length ||
    !replacement_cost ||
    !special_features ||
    !fulltext
  )
    res.status(404).json({
      message:
        "One of the atribute is missing, please fullfill the data before Posting!",
    });

  pool.query(
    `INSERT INTO film (film_id,
    title,
    description,
    release_year,
    language_id,
    rental_duration,
    rental_rate,
    length,
    replacement_cost,
    rating,
    special_features,
    fulltext) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
    [
      film_id,
      title,
      description,
      release_year,
      language_id,
      rental_duration,
      rental_rate,
      length,
      replacement_cost,
      rating,
      special_features,
      fulltext,
    ],
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(201).json({
        message: `Film successfully added with ID : ${film_id}`,
      });
    }
  );
};

// Handler untuk mengupdate film
const updateFilm = (req, res) => {
  const id = req.params.id;
  const {
    title,
    description,
    release_year,
    language_id,
    rental_duration,
    rental_rate,
    length,
    replacement_cost,
    rating,
    special_features,
    fulltext,
  } = req.body;

  if (
    !title ||
    !description ||
    !release_year ||
    !language_id ||
    !rental_duration ||
    !rental_rate ||
    !length ||
    !replacement_cost ||
    !special_features ||
    !fulltext
  )
    res.status(404).json({
      message:
        "One of the atribute is missing, please fullfill the data before Update!",
    });

  pool.query(
    `UPDATE film SET title = $1, description = $2, release_year = $3, language_id = $4, 
    rental_duration = $5, rental_rate = $6,length = $7, replacement_cost = $8, rating = $9,
    special_features = $10, fulltext = $11`,
    [
      title,
      description,
      release_year,
      language_id,
      rental_duration,
      rental_rate,
      length,
      replacement_cost,
      rating,
      special_features,
      fulltext,
    ],
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      } else if (results.rows.length == 0) {
        return res.status(404).json({
          message: `Sorry, we couldn't find film with ID : ${id}`,
        });
      }
      return res
        .status(200)
        .json({ message: `Film with ID : ${id} was successfully updated` });
    }
  );
};

const deleteFilm = (req, res) => {
  const id = req.params.id;
  pool.query(`DELETE FROM film WHERE film_id = ${id}`, (error, results) => {
    if (error) {
      return res.status(500).json({ message: error.message });
    }
    return res
      .status(200)
      .json({ message: `Film with ID : ${id} was successfully deleted` });
  });
};

module.exports = {
  noParams,
  getFilm,
  getFilmById,
  getFilmByCategory,
  addFilm,
  updateFilm,
  deleteFilm,
};
