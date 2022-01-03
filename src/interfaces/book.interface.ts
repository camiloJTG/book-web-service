import { Book } from '../models/book.model';
import { userReq } from './user.interface';

export interface bookReq {
  id?: string;
  name: string;
  subname?: string;
  author: string;
  pages: number;
  synopsis: string;
  rating: number;
  urlImg?: string;
  publisher: string;
  userId: string;
  user?: userReq;
  imgPublicId?: string;
}

export interface bookUpdateReq {
  id?: string;
  name: string;
  subname?: string;
  author: string;
  pages: number;
  synopsis: string;
  rating: number;
  urlImg?: string;
  publisher: string;
  imgPublicId?: string;
}

export interface paginator {
  result: Book[];
  count: number;
}

export interface authorsAndPublisher {
  authors: string[];
  publishers: string[];
}
