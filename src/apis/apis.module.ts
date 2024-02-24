import { Module } from '@nestjs/common';
import { SignupModule } from './product/product.module';

@Module({
  imports: [
    SignupModule,
  ],
})
export class ApisModule {}
