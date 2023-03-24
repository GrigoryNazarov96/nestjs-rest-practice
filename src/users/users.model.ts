import { ApiProperty } from '@nestjs/swagger/dist';
import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { Post } from 'src/posts/posts.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique user id' })
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'example@example.com', description: "User's email" })
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'UiXvtE86_0HuJ', description: "User's password" })
  @Column({ type: DataTypes.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'false', description: "Indicates user's ban status" })
  @Column({ type: DataTypes.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({
    example: 'Inappropriate behaviour',
    description: 'Reason of the ban, if the user is banned',
  })
  @Column({ type: DataTypes.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[];
}

