/**
 * @swagger
 *
 * /social:
 *  get:
 *      tags:
 *          - Módulo de redes sociales
 *      description: Obtener todas las redes sociales
 *      responses:
 *          200:
 *              description: Retorna todas las redes sociales
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: false
 *                              status:
 *                                  type: integer
 *                                  example: 200
 *                              body:
 *                                  allOf:
 *                                      - $ref: '#/definitions/social'
 *          400:
 *              description: Respuestas asociadas a errores de ingreso de datos
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: True
 *                              status:
 *                                  type: integer
 *                                  example: 400 | 401 | 402 | 403
 *                              body:
 *                                  type: string
 *          500:
 *              description: Respuestas asociadas a errores interno del servicio
 *              content:
 *                  application/json:
 *                      schema:
 *                          properties:
 *                              error:
 *                                  types: boolean
 *                                  example: True
 *                              status:
 *                                  type: integer
 *                                  example: 500 | 501 | 502
 *                              body:
 *                                  type: string
 * definitions:
 *  social:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *          name:
 *              type: string
 *          purpose:
 *              type: string
 *          priority:
 *              type: number
 *          socialLink:
 *              type: string
 *          logo:
 *              type: object
 *              allOf:
 *                  - $ref: '#/definitions/images'
 *  images:
 *      type: object
 *      properties:
 *          localUrl:
 *              type: string
 *          remoteId:
 *              type: string
 *          remoteUrl:
 *              type: string
 */
