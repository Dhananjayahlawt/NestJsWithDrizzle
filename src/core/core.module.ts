import { Module } from '@nestjs/common';
import { CanConfigModule } from './config/config.module';
import { CanDatabaseModule } from './database/database.module';

@Module({
  imports: [CanConfigModule,CanDatabaseModule],
  exports: [],
})
export class CoreModule {}
