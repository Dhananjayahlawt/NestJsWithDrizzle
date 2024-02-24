import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ICanDatabaseConfigAttributes } from './databse.config.interface';

@Injectable()
export class CanDataBaseConfig  {
  constructor(private configService: ConfigService) {}

  /**
   * Extract Database Configuration from Environment File
   */
  get dataBaseConfiguration():ICanDatabaseConfigAttributes {
    return {
        connectionString: this.configService.get('db.connectionString') as any,
    };
  }
}
