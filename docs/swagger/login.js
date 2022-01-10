/**
 * @swagger
 * /api/auth/:
 *  post:
 *      tags:
 *          - Auth module
 *      description: Create a new token
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#/definitions/loginReq'
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
 *                                      - $ref: '#/definitions/loginRes'
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
 *  loginReq:
 *      type: object
 *      required:
 *          - username
 *          - password
 *      properties:
 *          username:
 *            type: string
 *            description: Registered user name
 *          password:
 *            type: string
 *            description: Registered password
 *  loginRes:
 *      type: object
 *      properties:
 *          token:
 *            type: string
 *            description: Token generated
 *          type:
 *            type: string
 *            description: Token type
 *          exp:
 *            type: string
 *            description: Expiration date
 */
