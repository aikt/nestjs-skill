import { Controller, Post, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
