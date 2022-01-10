/**
 * @swagger
 * /api/books/:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Book module
 *      description: Create a new book
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                       $ref: '#/definitions/createBookReq'
 *      responses:
 *          200:
 *              description: Registered book data
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  example: false
 *                              status:
 *                                  type: integer
 *                                  example: 201
 *                              body:
 *                                  allOf:
 *                                      - $ref: '#/definitions/createBookRes'
 *          400:
 *              description: Response associated with data entry errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/definitions/response4xx'
 *          500:
 *              description: Response associated with internal error server
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/definitions/response5xx'
 * /api/books/{bookId}/user/{userId}:
 *  get:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Book module
 *      description: Get one book by bookId and userId
 *      parameters:
 *          - in: path
 *            name: bookId
 *            schema:
 *              type: string
 *            required: true
 *            description: Auto increment id associated to book
 *          - in: path
 *            name: userId
 *            schema:
 *              type: string
 *            required: true
 *            description: Auto increment id associated to user
 *      responses:
 *          200:
 *              description: Obtain the data of the searched book
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  example: false
 *                              status:
 *                                  type: integer
 *                                  example: 200
 *                              body:
 *                                  allOf:
 *                                      - $ref: '#/definitions/createBookRes'
 *          400:
 *              description: Response associated with data entry errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/definitions/response4xx'
 *          500:
 *              description: Response associated with internal error server
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/definitions/response5xx'
 * /api/books/user/{userId}:
 *  get:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - Book module
 *      description: Get all books by user id and paginated
 *      parameters:
 *          - in: path
 *            name: userId
 *            schema:
 *              type: string
 *            required: true
 *            description: Auto increment id
 *          - in: query
 *            name: take
 *            required: true
 *            schema:
 *              type: number
 *          - in: query
 *            name: skip
 *            required: true
 *            schema:
 *              type: number
 *      responses:
 *          200:
 *              description: Books paginated
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  type: boolean
 *                                  example: false
 *                              status:
 *                                  type: integer
 *                                  example: 200
 *                              body:
 *                                  allOf:
 *                                      - $ref: '#/definitions/createBookRes'
 *          400:
 *              description: Response associated with data entry errors
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/definitions/response4xx'
 *          500:
 *              description: Response associated with internal error server
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/definitions/response5xx'
 * definitions:
 *  response5xx:
 *      type: object
 *      properties:
 *          error:
 *              type: boolean
 *              description: true if answer 2xx and false if answer 4xx or 5xx
 *              example: true
 *          status:
 *              type: integer
 *              description: Http code of the answer
 *              example: 500 | 502 | 503 | 504
 *          body:
 *              type: string
 *              description: Data entry error message
 *              example: Internal server error
 *  response4xx:
 *      type: object
 *      properties:
 *          error:
 *              type: boolean
 *              description: true if answer 2xx and false if answer 4xx or 5xx
 *              example: true
 *          status:
 *              type: integer
 *              description: Http code of the answer
 *              example: 400 | 401 | 403 | 404
 *          body:
 *              type: string
 *              description: Data entry error message
 *              example: Not data found
 *  createBookReq:
 *      type: object
 *      required:
 *          - name
 *          - author
 *          - pages
 *          - synopsis
 *          - rating
 *          - userId
 *          - image
 *          - publisher
 *      properties:
 *          name:
 *            type: string
 *            description: Book name
 *          subname:
 *            type: string
 *            description: Group to which the book belongs (trilogies among others)
 *          author:
 *            type: string
 *            description: Author of the book
 *          pages:
 *            type: number
 *            description: Page number of the book
 *          synopsis:
 *            type: string
 *            description: Sort description about the book
 *          rating:
 *            type: number
 *            description:  Rating of the book. 1 to 5
 *          userId:
 *            type: string
 *            description: Id associated to user
 *          image:
 *            type: string
 *            description: Image to upload
 *            format: binary
 *          publisher:
 *            type: string
 *            description: Publisher of the book
 *  createBookRes:
 *      type: object
 *      properties:
 *          id:
 *            type: string
 *            description: Auto increment value generate by service
 *          name:
 *            type: string
 *            description: Book name
 *          subname:
 *            type: string
 *            description: Group to which the book belongs (trilogies among others)
 *          author:
 *            type: string
 *            description: Author of the book
 *          pages:
 *            type: number
 *            description: Page number of the book
 *          synopsis:
 *            type: string
 *            description: Sort description about the book
 *          rating:
 *            type: number
 *            description:  Rating of the book. 1 to 5
 *          userId:
 *            type: string
 *            description: Id associated to user
 *          urlImg:
 *            type: string
 *            description: Url the images
 *          publisher:
 *            type: string
 *            description: Publisher of the book
 *          createdAt:
 *            type: string
 *            format: date
 *          updatedAt:
 *            type: string
 *            format: date
 *  createBookRes:
 *      type: object
 *      properties:
 *          id:
 *            type: string
 *            description: Auto increment value generate by service
 *          name:
 *            type: string
 *            description: Book name
 *          subname:
 *            type: string
 *            description: Group to which the book belongs (trilogies among others)
 *          author:
 *            type: string
 *            description: Author of the book
 *          pages:
 *            type: number
 *            description: Page number of the book
 *          synopsis:
 *            type: string
 *            description: Sort description about the book
 *          rating:
 *            type: number
 *            description:  Rating of the book. 1 to 5
 *          userId:
 *            type: string
 *            description: Id associated to user
 *          urlImg:
 *            type: string
 *            description: Url the images
 *          publisher:
 *            type: string
 *            description: Publisher of the book
 *          createdAt:
 *            type: string
 *            format: date
 *          updatedAt:
 *            type: string
 *            format: date
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 */
