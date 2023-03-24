import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Role should be a string value' })
  readonly value: string;

  @IsNumber({}, { message: "User's Id should be a number value" })
  readonly userId: number;
}
