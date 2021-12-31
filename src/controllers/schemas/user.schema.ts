import joi from 'joi';

const userSchema = joi.string().max(200).min(3).trim();
const passwordSchema = joi.string().max(200).min(3).trim();
const emailSchema = joi.string().max(200).min(3).trim();

export const idSchema = joi.string().max(300).min(3).trim();

export const createUserSch = {
  name: userSchema.required(),
  email: emailSchema.required(),
  password: passwordSchema.required(),
};

export const updateUserSch = {
  name: userSchema,
  email: emailSchema,
  password: passwordSchema,
};
