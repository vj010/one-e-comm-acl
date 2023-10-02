import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
