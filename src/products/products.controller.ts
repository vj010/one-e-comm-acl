import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Roles } from './decorators/role-metadata.decorator';
import { UserRole } from 'src/authentication/enums/user-roles.enum';
import { UserRoleGuard } from './guards/user-role.guard';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Roles(Object.values(UserRole))
  @UseGuards(UserRoleGuard)
  @Get()
  async getProducts() {
    return { message: 'Products sent successfully' };
  }

  @Roles([UserRole.ADMIN, UserRole.SELLER])
  @UseGuards(UserRoleGuard)
  @Post()
  async saveProduct() {
    return { message: 'Product added successfully' };
  }

  @Roles([UserRole.ADMIN, UserRole.SELLER])
  @UseGuards(UserRoleGuard)
  @Put()
  async updateProduct() {
    return { message: 'Product updated successfully' };
  }

  @Roles([UserRole.ADMIN, UserRole.SELLER])
  @UseGuards(UserRoleGuard)
  @Patch()
  async partialUpdateProduct() {
    return { message: 'Product updated successfully' };
  }

  @Roles([UserRole.ADMIN, UserRole.SUPPORTER])
  @UseGuards(UserRoleGuard)
  @Delete()
  async deleteProduct() {
    return { message: 'Product deleted successfully' };
  }
}
