import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApisModule } from './apis/apis.module';
import { CoreModule } from './core/core.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      useFactory: () => ({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.colorize(),
              winston.format.simple(),
            ),
          }),
        ],
      }),
    }),
    ApisModule,
    CoreModule,
    UtilsModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
