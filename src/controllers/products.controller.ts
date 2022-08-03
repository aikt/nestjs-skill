import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productService.findAll();
  }
  @Get('filter')
  getFilter() {
    return {
      message: `yo soy un filter`,
    };
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: string) {
    return this.productService.findOne(+productId);
  }
  @Post()
  create(@Body() payload: any) {
    return this.productService.create(payload);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.productService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
