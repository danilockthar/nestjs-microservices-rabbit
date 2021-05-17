import { Controller, Get, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  RmqContext,
} from '@nestjs/microservices';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async all() {
    return this.productService.all();
  }

  @EventPattern('GET_ALL_PRODUCTS')
  async hello(): Promise<any> {
    return await this.productService.all();
  }

  @EventPattern('CREATE_PRODUCT')
  async create(product: ProductDto): Promise<Product> {
    Logger.log(product);
    return await this.productService.create(product);
  }
}
