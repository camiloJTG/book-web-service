import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Book } from './book.model';

@Entity({ name: 'publisher' })
export class Publisher {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @OneToMany(() => Book, (book) => book.publisher)
  book!: Book[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;
}
