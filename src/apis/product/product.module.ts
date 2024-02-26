import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

import { CanConfigModule } from 'src/core/config/config.module';
import { UtilsModule } from 'src/utils/utils.module';
import { databaseProvider } from 'src/core/database/database.provider';

@Module({
  imports: [CanConfigModule,UtilsModule],
  controllers: [ProductController],
  providers: [ProductService,...databaseProvider],
})
export class ProductModule {}
