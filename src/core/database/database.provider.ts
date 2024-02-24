
export const DatabaseAsyncProvider='databaseProvider'
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from 'pg';
import * as schema from './product';
import { ConfigService } from '@nestjs/config';
import { CanDataBaseConfig } from "./database.config";

export const databaseProvider=[
    {
        provide:DatabaseAsyncProvider,
        useFactory:async(canDataSourceConfig: CanDataBaseConfig)=>{
            const client = new Client({
               connectionString:process.env.CONNECTION_STRING
              });

              await client.connect();
              const db = drizzle(client,{schema:schema}); 
              return db;
        },
        exports:[DatabaseAsyncProvider]
    }
]