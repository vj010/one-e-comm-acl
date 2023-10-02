import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enums/user-roles.enum';

@Entity('USERS')
export class Users {
  @PrimaryGeneratedColumn()
  @Column({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'role' })
  role: UserRole;
}
