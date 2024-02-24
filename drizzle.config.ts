import type {Config} from 'drizzle-kit';


export default {
    schema :'./src/database/product.ts',
    out :'./drizzle',
    driver:'pg',
    dbCredentials:{
        connectionString:process.env.C
    },

} satisfies Config;
