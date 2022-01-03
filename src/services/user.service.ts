import { getRepository } from 'typeorm';
import { v4 as randomId } from 'uuid';
import { User } from '../models/user.model';
import { userReq } from '../interfaces/user.interface';
import { login, payload, tokenResponse } from '../interfaces/auth.interface';
import { encrypt, validateHash } from '../utils/bcrypt';
import { createToken } from '../utils/jwt';

export const createUser = async (user: userReq): Promise<User | string> => {
  try {
    const userRepo = getRepository(User);
    const findUser = await userRepo.find({
      where: [{ email: user.email }, { name: user.name }],
    });
    if (findUser.length !== 0)
      return 'The username or email has already registered';

    const newPass = await encrypt(user.password);
    const newUser = new User();
    newUser.id = randomId();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = newPass;

    const result = await userRepo.save(newUser);

    return result;
  } catch (error) {
    throw error;
  }
};

export const getOneUser = async (id: string): Promise<User | string> => {
  try {
    const userRepo = getRepository(User);
    const findUser = await userRepo.findOne(id);
    if (!findUser) return 'User not found';
    return findUser;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (
  id: string,
  user: userReq
): Promise<User | string> => {
  try {
    const userRepo = getRepository(User);

    const findUser = await userRepo.findOne(id);
    if (!findUser) return 'User not found';

    const findByEmailAndUsername = await userRepo.find({
      where: [{ email: user.email }, { name: user.name }],
    });
    if (findByEmailAndUsername.length !== 0)
      return `The username or email has already registered`;
    if (user.password) {
      const newPass = await encrypt(user.password);
      user.password = newPass;
    }

    const result = await userRepo.save({
      id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return result;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (
  credentials: login
): Promise<tokenResponse | string> => {
  try {
    const userRepo = getRepository(User);
    const { password, username } = credentials;

    const validateUser = await userRepo.find({ name: username });
    if (validateUser.length === 0) return 'Invalid credentials';

    const passOk = await validateHash(password, validateUser[0].password);
    if (!passOk) return 'Invalid credentials';

    const payload: payload = {
      id: validateUser[0].id,
      email: validateUser[0].email,
      username: validateUser[0].name,
    };

    const tokenBody = createToken(payload);
    return tokenBody;
  } catch (error) {
    throw error;
  }
};
