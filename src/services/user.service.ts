import { getRepository } from 'typeorm';
import { v4 as randomId } from 'uuid';
import { User } from '../models/user.model';
import { userReq } from '../interfaces/user.interface';
import { encrypt } from '../utils/bcrypt';

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

export const updateUser = async (id: string, user: userReq) => {
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
