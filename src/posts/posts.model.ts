import { ApiProperty } from '@nestjs/swagger/dist';
import { DataTypes } from 'sequelize';
import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'roles' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique post id' })
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Depeche Mode appreciation post',
    description: 'Post title',
  })
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({
    example: 'I decided to share this post to say, that I love Depeche Mode',
    description: 'Post Content',
  })
  @Column({ type: DataTypes.STRING, allowNull: false })
  content: string;

  @ApiProperty({
    example: 'depeche_mode_09381.jpg',
    description: 'Post Image',
  })
  @Column({ type: DataTypes.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
