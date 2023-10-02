import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProducts() {
    return { message: 'Products sent successfully' };
  }

  @Post()
  async saveProduct() {
    return { message: 'Product added successfully' };
  }

  @Put()
  async updateProduct() {
    return { message: 'Product updated successfully' };
  }

  @Patch()
  async partialUpdateProduct() {
    return { message: 'Product updated successfully' };
  }

  @Delete()
  async deleteProduct() {
    return { message: 'Product deleted successfully' };
  }
}
