import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CreateProduct, PartialUpdateProduct} from './product.dto';
import { ProductService } from './product.service';
import { UtilsService } from 'src/utils/utils.service';
@Controller('product')
export class ProductController {
  constructor(
    private readonly signupService: ProductService,
    private readonly utilsService: UtilsService,
  ) {}

  @Post()
  async create(@Res() response,@Body() payload:CreateProduct): Promise<void> {
    const resp = await this.signupService.createProduct(payload);
    const statusCode = resp.status ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    this.utilsService.sendResponse(
      response,
      statusCode,
      resp.data,
      resp.message,
    );
    return;
  }

  @Get(':id')
  async getProductById(@Res() response, @Param('id') id: string): Promise<void> {
    const productId:number=parseInt(id.trim());
    const resp = await this.signupService.getProductById(productId);
    const statusCode = resp.status ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    this.utilsService.sendResponse(
      response,
      statusCode,
      resp.data,
      resp.message,
    );
    return;
  }


  @Get('all')
  async getAllDetails(@Res() response): Promise<void> {
    const resp = await this.signupService.getAllProduct();
    const statusCode = resp.status ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    this.utilsService.sendResponse(
      response,
      statusCode,
      resp.data,
      resp.message,
    );
    return;
  }

  @Delete(':id')
  async deleteProductById(@Res() response,@Param('id') id: string): Promise<void> {
    const productId:number=parseInt(id.trim())
    const resp = await this.signupService.deleteProductById(productId);
    const statusCode = resp.status ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    this.utilsService.sendResponse(
      response,
      statusCode,
      resp.data,
      resp.message,
    );
    return;
  }

  @Patch(':id')
  async partialUpdateProduct(@Res() response,@Param('id') id: string,@Body() payload:PartialUpdateProduct): Promise<void> {
    const productId:number=parseInt(id.trim())
    const resp = await this.signupService.partialUpdateProduct(productId,payload);
    const statusCode = resp.status ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    this.utilsService.sendResponse(
      response,
      statusCode,
      resp.data,
      resp.message,
    );
    return;
  }

}
