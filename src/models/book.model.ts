import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.model';

@Entity({ name: 'book' })
export class Book {
  @Column({ primary: true })
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

  @Column()
  publisher!: string;

  @Column()
  imgPublicId: string;

  @ManyToOne(() => User, (user) => user.books)
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;
}
