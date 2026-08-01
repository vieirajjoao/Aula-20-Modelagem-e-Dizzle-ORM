import 'dotenv/config'
export default {
    schema: './src/db/schema.js',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredential: {url: process.env.DATABASE_URL}
}
