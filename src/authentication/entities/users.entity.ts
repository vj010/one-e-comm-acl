import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRole } from '../enums/user-roles.enum';

@Entity('USERS')
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  @PrimaryColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'USERNAME' })
  userName: string;

  @Column({ name: 'PASSWORD' })
  password: string;

  @Column({ name: 'ROLE' })
  role: UserRole;
}
