import { Task } from "src/tasks/entities/task.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @Index("pk_user_id")
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Index("idx_user_email")
  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
