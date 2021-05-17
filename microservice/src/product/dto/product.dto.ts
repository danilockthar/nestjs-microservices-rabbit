import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'El título no puede quedar vacío' })
  title: string;
  @IsNotEmpty({ message: 'La imagen no puede quedar vacía' })
  image: string;
}
