import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  private logger = new Logger('ProductController');
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  all(): Observable<any> {
    return this.client.send<string, string>('GET_ALL_PRODUCTS', '');
  }
  @Post()
  create(@Body(ValidationPipe) productDto: ProductDto): Observable<any> {
    this.logger.verbose(productDto, 'dto');
    return this.client.send<string, ProductDto>('CREATE_PRODUCT', productDto);
  }
}
