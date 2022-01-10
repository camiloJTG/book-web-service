/**
 * @swagger
 * /api/users/:
 *  post:
 *      tags:
 *          - User module
 *      description: Create a new user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/definitions/createUserReq'
 *      responses:
 *          200:
 *              description: Registered user data
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
 *                                      - $ref: '#/definitions/createUserRes'
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
 * /api/users/{id}:
 *  get:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - User module
 *      description: Get a user by id auto increment
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Auto increment id
 *      responses:
 *          200:
 *              description: Obtain the data of the searched user
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
 *                                      - $ref: '#/definitions/createUserRes'
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
 *  put:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *          - User module
 *      description: Update user by auto increment id
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Auto increment id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/definitions/updateUserReq'
 *      responses:
 *          200:
 *              description: Obtain the data of the updated user
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
 *                                      - $ref: '#/definitions/createUserRes'
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
 *  updateUserReq:
 *      type: object
 *      properties:
 *          name:
 *            type: string
 *            description: Registered user name
 *          email:
 *            type: string
 *            description: Registered email
 *          password:
 *            type: string
 *            description: Registered password
 *
 *  createUserReq:
 *      type: object
 *      required:
 *          - name
 *          - email
 *          - password
 *      properties:
 *          name:
 *            type: string
 *            description: Registered user name
 *          email:
 *            type: string
 *            description: Registered email
 *          password:
 *            type: string
 *            description: Registered password
 *  createUserRes:
 *      type: object
 *      properties:
 *          id:
 *            type: string
 *            description: Auto increment value generate by service
 *          name:
 *            type: string
 *            description: Registered user name
 *          email:
 *            type: string
 *            description: Registered email
 *          password:
 *            type: string
 *            description: Registered password
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
