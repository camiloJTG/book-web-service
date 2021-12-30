import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Publisher } from './publisher.model';
import { User } from './user.model';

@Entity({ name: 'book' })
export class Book {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  subname!: string;

  @Column()
  author!: string;

  @Column()
  pages!: number;

  @Column()
  synopsis!: string;

  @Column()
  rating!: number;

  @Column()
  urlImg!: string;

  @ManyToOne(() => User, (user) => user.books)
  user!: User;

  @ManyToOne(() => Publisher, (publisher) => publisher)
  publisher!: Publisher;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;
}
