import joi from 'joi';

const usernameSchema = joi.string().max(300).min(3).trim();
const passwordSchema = joi.string().max(400).min(3).trim();

export const login = {
  username: usernameSchema.required(),
  password: usernameSchema.required(),
};
