import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const tlgUsers = sqliteTable('tlg_users', {
    id: integer('id').primaryKey(),
    id2: text('id2').unique(),
    first_name: text('first_name'),
    last_name: text('last_name'),
    username: text('username'),
    language_code: text('language_code'),
    settings: text('settings', { mode: 'json' }).default('{}'),
    created_at: integer('created_at'),
    updated_at: integer('updated_at'),
    last_seen_at: integer('last_seen_at'),
})
