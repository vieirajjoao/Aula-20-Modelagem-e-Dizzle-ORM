import { pgTable, serial, text, integer} from "drizzle-orm/pg-core";

export const pacientes = pgTable('pacientes', {
    id: serial('id').primaryKey(),
    nome: text('nome').notNull(),
    idade: integer('idade').notNull(),
    urgencia: text('urgencia').notNull()
})