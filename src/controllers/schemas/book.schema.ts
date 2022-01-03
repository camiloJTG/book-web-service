import joi from 'joi';

const nameSchema = joi.string().max(300).min(3).trim();
const subnameSchema = joi.string().max(400).min(3).trim();
const authorSchema = joi.string().max(200).min(3).trim();
const pagesSchema = joi.number().positive();
const synopsisSchema = joi.string().max(800).min(10).trim();
const ratingSchema = joi.number().positive().min(1).max(5);
const userIdSchema = joi.string().max(200).min(10).trim();
const publisherSchema = joi.string().max(400).min(3).trim();
const bookIdSchema = joi.string().max(200).min(10).trim();
const valueSchema = joi.string().max(200).min(1).trim();

export const reqParams = {
  bookId: bookIdSchema.required(),
  userId: userIdSchema.required(),
};

export const reqSearch = {
  userId: bookIdSchema.required(),
  value: valueSchema.required(),
};

export const createBook = {
  name: nameSchema.required(),
  subname: subnameSchema,
  author: authorSchema.required(),
  pages: pagesSchema.required(),
  synopsis: synopsisSchema.required(),
  rating: ratingSchema.required(),
  userId: userIdSchema.required(),
  publisher: publisherSchema.required(),
};

export const updateBook = {
  name: nameSchema,
  subname: subnameSchema,
  author: authorSchema,
  pages: pagesSchema,
  synopsis: synopsisSchema,
  rating: ratingSchema,
  userId: userIdSchema,
  publisher: publisherSchema,
};
