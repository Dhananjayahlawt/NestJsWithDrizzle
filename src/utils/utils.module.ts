import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { CanConfigModule } from 'src/core/config/config.module';

@Module({
  imports: [CanConfigModule ],
  providers: [UtilsService],
  exports: [UtilsService],
})
export class UtilsModule {}
