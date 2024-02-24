import { Module } from '@nestjs/common';
import { databaseProvider } from './database.provider';
import { CanConfigModule } from 'src/core/config/config.module';
import { CanDataBaseConfig } from './database.config';

@Module({
 imports: [CanConfigModule],
 providers:[...databaseProvider,CanDataBaseConfig]
})
export class CanDatabaseModule {}
