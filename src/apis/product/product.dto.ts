import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsEnum,
  isInt,
  IsInt,
} from 'class-validator';

export class PartialUpdateProduct{

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  color?: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  size?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  price?: number;

}


export class CreateProduct{

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  color: string;


  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  size: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  price: number;

}