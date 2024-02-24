import { ConflictException, Inject, Injectable } from '@nestjs/common';
import * as schema from '../../core/database/product'

import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreateProduct, PartialUpdateProduct } from './product.dto';
import { eq } from 'drizzle-orm';
import { UtilsService } from 'src/utils/utils.service';
import { FunctionReturnObject } from 'src/utils/utils.interface';
import { ERROR_WHILE_CREATE_PRODUCT, ERROR_WHILE_DELETE_PRODUCT, ERROR_WHILE_FETCHING_PRODUCT_DETAILS, ERROR_WHILE_UPDATING_PRODUCT, PRODUCT_ALREADY_EXISTS, PRODUCT_CREATED, PRODUCT_DETAILS_NOT_FOUND, SUCCESSFULLY_DELETE_PRODUCT, SUCCESSFULLY_GETTING_PRODUCT_DETAILS, SUCCESSFULLY_UPDATED_PRODUCT } from 'src/core/constants/user.constant';
import { DatabaseAsyncProvider } from 'src/core/database/database.provider';

@Injectable()
export class ProductService {
  constructor( @Inject(DatabaseAsyncProvider) private db:NodePgDatabase<typeof schema>, private utilsService: UtilsService,) {}

  async createProduct(payload:CreateProduct):Promise<FunctionReturnObject>{
    try {
      const product=await this.db.query.product.findFirst({
        where:eq(schema.product.name,payload.name)
      })

      if(product){
        return { status: true, message: PRODUCT_ALREADY_EXISTS, data: null,error:null};
      };

      const newProduct=await this.db.insert(schema.product).values({
        ...payload
      }).returning();

      return { status: true, message: PRODUCT_CREATED, data: newProduct,error:null };
    } catch (error) {
      console.log(`[Product Service]   createProduct`);
      return { status: false, message: ERROR_WHILE_CREATE_PRODUCT, data: null,error:error.message };
    }
  }



  async getProductById(productId:number):Promise<FunctionReturnObject>{
    try {
      const product=await this.db.query.product.findFirst({
        where:eq(schema.product.id,productId)
      })

      if(!product){
        return { status: true, message: PRODUCT_DETAILS_NOT_FOUND, data: null,error:null};
      };

      return { status: true, message: SUCCESSFULLY_GETTING_PRODUCT_DETAILS, data: product,error:null };
    } catch (error) {
      console.log(`[Product Service]   createProduct`);
      return { status: false, message: ERROR_WHILE_FETCHING_PRODUCT_DETAILS, data: null,error:error.message };
    }
  }

  async getAllProduct():Promise<FunctionReturnObject>{
    try {
      const products=await this.db.query.product.findMany();
      console.log("111111",products)
      if(!products){
        return { status: true, message: PRODUCT_DETAILS_NOT_FOUND, data: null,error:null};
      };

      return { status: true, message: SUCCESSFULLY_GETTING_PRODUCT_DETAILS, data: products,error:null };
    } catch (error) {
      console.log(`[Product Service]   createProduct`);
      return { status: false, message: ERROR_WHILE_FETCHING_PRODUCT_DETAILS, data: null,error:error.message };
    }
  }


  async deleteProductById(productId:number):Promise<FunctionReturnObject>{
    try {
      const deletedUserIds: { deletedId: number }[] = await this.db.delete(schema.product).where(eq(schema.product.id, productId)).returning({ deletedId:schema.product.id });
      if(deletedUserIds&&deletedUserIds.length>0){
        return { status: true, message: SUCCESSFULLY_DELETE_PRODUCT, data: deletedUserIds,error:null };
      };

      return { status: true, message: PRODUCT_DETAILS_NOT_FOUND, data: null,error:null };
    } catch (error) {
      console.log(`[Product Service]   createProduct`);
      return { status: false, message: ERROR_WHILE_DELETE_PRODUCT, data: null,error:error.message };
    }
  }

  async partialUpdateProduct(productId:number,updatedDetails:PartialUpdateProduct):Promise<FunctionReturnObject>{
    try {
      console.log("111111",updatedDetails);
      const updatedUserId: { updatedId: number }[] = await this.db.update(schema.product)
      .set({ ...updatedDetails })
      .where(eq(schema.product.id,productId))
      .returning({ updatedId:schema.product.id }); 

      console.log("111111",updatedUserId);
      if(updatedUserId&&updatedUserId.length>0){
        return { status: true, message: SUCCESSFULLY_UPDATED_PRODUCT, data: updatedUserId,error:null };
      };

      return { status: true, message: PRODUCT_DETAILS_NOT_FOUND, data: null,error:null };
    } catch (error) {
      console.log(`[Product Service]   createProduct`);
      return { status: false, message: ERROR_WHILE_UPDATING_PRODUCT, data: null,error:error.message };
    }
  }
}
