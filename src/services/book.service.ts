import { getRepository } from 'typeorm';
import { v4 as randomId } from 'uuid';
import { deleteFile, uploadFile } from '../apis/cloudinary';

import { Book } from '../models/book.model';
import * as bookIrf from '../interfaces/book.interface';
import { deleteLocalFile } from '../utils/files';
import { getOneUser } from './user.service';
import config from '../configs/config';

const { cloudinary } = config;
const { booksFolder } = cloudinary;

export const createBook = async (
  book: bookIrf.bookReq,
  file: Express.Multer.File
): Promise<Book | string> => {
  try {
    const bookRepo = getRepository(Book);

    const findUser = await getOneUser(book.userId);
    if (typeof findUser === 'string') return findUser;

    const fileUpload = await uploadFile(file.path, booksFolder!);
    await deleteLocalFile(file.path);

    book.id = randomId();
    book.urlImg = fileUpload.secure_url;
    book.imgPublicId = fileUpload.public_id;
    book.user = findUser;

    const result = await bookRepo.save(book);
    delete result['user'];
    delete result['imgPublicId'];

    return result;
  } catch (error) {
    throw error;
  }
};

export const updateBook = async (
  id: string,
  book: bookIrf.bookUpdateReq,
  file: Express.Multer.File
): Promise<Book | string> => {
  try {
    const bookRepo = getRepository(Book);

    const findBook = await bookRepo.findOne(id);
    if (!findBook) return 'No data found';

    if (file) {
      await deleteFile([findBook.imgPublicId]);
      const newImg = await uploadFile(file.path, booksFolder);
      await deleteLocalFile(file.path);
      book.imgPublicId = newImg.public_id;
      book.urlImg = newImg.secure_url;
    }
    book.id = findBook.id;

    const result = await bookRepo.save(book);
    delete result['imgPublicId'];
    delete result['user'];
    return result;
  } catch (error) {
    throw error;
  }
};

export const getOneBook = async (
  bookId: string,
  userId: string
): Promise<Book | String> => {
  try {
    const result = await getRepository(Book)
      .createQueryBuilder('book')
      .where('book.id =:bookId', { bookId })
      .andWhere('book.userId =:userId', { userId })
      .getOne();

    if (!result) return 'No data found';
    delete result['imgPublicId'];
    return result;
  } catch (error) {
    throw error;
  }
};

export const getAllBooks = async (
  userId: string,
  take: number = 10,
  skip: number = 0
): Promise<bookIrf.paginator | string> => {
  try {
    const [result, count] = await getRepository(Book)
      .createQueryBuilder('book')
      .where('book.userId =:userId', { userId })
      .orderBy('book.createdAt', 'DESC')
      .take(take)
      .skip(skip)
      .getManyAndCount();
    if (result.length === 0) return 'No data found';
    result.map((x) => delete x.imgPublicId);
    return { result, count };
  } catch (error) {
    throw error;
  }
};

export const getPublisherAndAuthors = async (
  userId: string
): Promise<bookIrf.authorsAndPublisher | string> => {
  try {
    const result = await getRepository(Book)
      .createQueryBuilder('book')
      .where('book.userId =:userId', { userId })
      .getMany();

    if (result.length === 0) return 'No data found';

    const authors = result
      .map((x) => x.author)
      .filter((val, i, self) => i === self.indexOf(val));
    const publishers = result
      .map((x) => x.publisher)
      .filter((val, i, self) => i === self.indexOf(val));

    return { authors, publishers };
  } catch (error) {
    throw error;
  }
};

export const searchByValue = async (
  userId: string,
  value: string,
  take: number = 10,
  skip: number = 0
): Promise<bookIrf.paginator | string> => {
  const [result, count] = await getRepository(Book)
    .createQueryBuilder('book')
    .where('book.userId =:userId', { userId })
    .andWhere('book.name =:value', { value })
    .orWhere('book.rating =:value', { value })
    .orWhere('book.publisher =:value', { value })
    .orWhere('book.author =:value', { value })
    .orderBy('book.createdAt', 'DESC')
    .skip(skip)
    .take(take)
    .getManyAndCount();
  if (result.length === 0) return 'No data found';
  result.map((x) => delete x.imgPublicId);
  return { result, count };
};

export const deleteBook = async (bookId: string, userId: string) => {
  try {
    const findBook = await getRepository(Book)
      .createQueryBuilder('book')
      .where('book.id =:bookId', { bookId })
      .andWhere('userId =:userId', { userId })
      .getOne();
    if (!findBook) return 'No data found';

    await deleteFile([findBook.imgPublicId]);

    const result = await getRepository(Book)
      .createQueryBuilder('book')
      .where('book.id =:bookId', { bookId })
      .andWhere('book.userId =:userId', { userId })
      .delete()
      .execute();

    if (result.affected === 0) return 'No data found';
    return result;
  } catch (error) {
    throw error;
  }
};
