import type {Config} from 'drizzle-kit';


export default {
    schema :'src/core/database/product.ts',
    out :'src/core/database/drizzle',
    driver:'pg',
    dbCredentials:{
        connectionString:''
    },

} satisfies Config;
