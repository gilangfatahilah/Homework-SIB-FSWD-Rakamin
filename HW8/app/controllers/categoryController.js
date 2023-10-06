const pool = require("../config");

// handler untuk menampilkan seluruh list kategori film
const getFilmCategory = (req, res) => {
  pool.query(
    "SELECT * FROM category ORDER BY category_id ASC",
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(200).json(results.rows);
    }
  );
};

// handler untuk menampilkan kategori film berdasarkan ID
const getFilmCategoryById = (req, res) => {
  const id = req.params.id;

  pool.query(
    `SELECT * FROM category WHERE category_id = ${id}`,
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      } else if (results.rows.length == 0) {
        return res
          .status(404)
          .json({ message: `Sorry we couldn't find category with id ${id}` });
      } else {
        return res.status(200).json(results.rows);
      }
    }
  );
};

const addCategory = (req, res) => {
  const { category_id, name } = req.body;
  if (!category_id || !name) {
    return res.status(404).json({
      message:
        "One of the atribute is missing, please fullfill the data before Posting!",
    });
  }

  pool.query(
    `INSERT INTO category (category_id, name) VALUES ($1, $2)`,
    [category_id, name],
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(201).json({
        message: `Category has successfully added with ID : ${category_id}`,
      });
    }
  );
};

const updateCategory = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  if (!name) {
    return res.status(404).json({ message: "Please enter a name!" });
  }

  pool.query(
    `UPDATE category SET name = $1 WHERE category_id = $2`,
    [name, id],
    (error, result) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      } else if (result.rows.length == 0) {
        return res.status(404).json({
          message: `Sorry, we couldn't find category with ID : ${id}`,
        });
      }
      return res.status(200).json({
        message: `Category with ID : ${id} has successfully updated!`,
      });
    }
  );
};

const deleteCategory = (req, res) => {
  const id = req.params.id;
  pool.query(
    `DELETE FROM category WHERE category_id = ${id}`,
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }
      return res
        .status(200)
        .json({ message: `Category with ID : ${id} was successfully deleted` });
    }
  );
};

module.exports = {
  getFilmCategory,
  getFilmCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
