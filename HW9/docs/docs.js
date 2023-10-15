/**
 * @swagger
 * components:
 *    schemas:
 *      register:
 *        type: object
 *        required:
 *          - email
 *          - gender
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            description: The email of the user
 *          gender:
 *            type: string
 *            description: The gender of the user
 *          password:
 *            type: string
 *            description: The password of the user
 */
/**
 * @swagger
 * components:
 *    schemas:
 *      login:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *            type: string
 *            description: The email of the user
 *          password:
 *            type: string
 *            description: The password of the user
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     movies:
 *       type: object
 *       required:
 *         - title
 *         - genres
 *         - year
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the movie
 *         title:
 *           type: string
 *           description: The title of movie
 *         genres:
 *           type: string
 *           description: The genres of movie
 *         year:
 *           type: string
 *           description: The year of movie
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       required:
 *         - email
 *         - gender
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the users
 *         email:
 *           type: string
 *           description: The email of the user
 *         gender:
 *           type: string
 *           description: The gender of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         role:
 *           type: string
 *           description: The role of the user
 */
/**
 * @swagger
 * components:
 *   securitySchemes:
 *
 *      Authorization:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */
/**
 * @swagger
 * tags:
 *   name: Register and Login
 *   description: The registration and login managing API
 * /register:
 *   post:
 *     summary: Register new user
 *     tags: [Register and Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/register'
 *       500:
 *         description: Some error occured!
 * /login:
 *   post:
 *     summary: Login user
 *     tags: [Register and Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: The user login.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/login'
 *       500:
 *         description: Some error occured!
 */
/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: The movies managing API
 * /movies:
 *   get:
 *     summary: Lists all the movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of the Movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/movies'
 *     security:
 *       - Authorization: []
 * /movie:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/movies'
 *     responses:
 *       200:
 *         description: The created movie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/movies'
 *       500:
 *         description: Some error occured!
 *     security:
 *       - Authorization: []
 * /movies/paginate?page={page}&limit={limit}:
 *   get:
 *     summary: Get the movie with the paginate
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: true
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The movies responses with paginate
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/movies'
 *       404:
 *         description: Sorry we couldn't find the movies !
 *     security:
 *       - Authorization: []
 * /movie/{id}:
 *   get:
 *     summary: Get the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The movies id
 *     responses:
 *       200:
 *         description: The movie response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/movies'
 *       404:
 *         description: Sorry we couldn't find the movies within the specified id
 *     security:
 *       - Authorization: []
 *   put:
 *    summary: Update the movie by the id
 *    tags: [Movies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The movie id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/movie'
 *    responses:
 *      200:
 *        description: The movie was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/movies'
 *      404:
 *        description: Sorry we couldn't find movie within specified id
 *      500:
 *        description: Some error happened
 *    security:
 *      - Authorization: []
 *   delete:
 *     summary: Remove the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The movie id
 *
 *     responses:
 *       200:
 *         description: The movie was deleted
 *       404:
 *         description: The movie was not found
 *     security:
 *       - Authorization: []
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/users'
 *     security:
 *       - Authorization: []
 * /user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/users'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       500:
 *         description: Some error occured!
 *     security:
 *       - Authorization: []
 * /users/paginates?page={page}&limit={limit}:
 *   get:
 *     summary: Get the user with the paginate
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: true
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: The users responses with paginate
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       404:
 *         description: Sorry we couldn't find the movies !
 *     security:
 *       - Authorization: []
 * /user/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The users id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       404:
 *         description: Sorry we couldn't find the movies within the specified id
 *     security:
 *       - Authorization: []
 *   put:
 *    summary: Update the user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/users'
 *    responses:
 *      200:
 *        description: The movie was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/users'
 *      404:
 *        description: Sorry we couldn't find movie within specified id
 *      500:
 *        description: Some error happened
 *    security:
 *      - Authorization: []
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 *     security:
 *       - Authorization: []
 */
