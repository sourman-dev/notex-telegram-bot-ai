import type { User } from 'grammy/types'
import { hashids } from '../utils/common'
export const upsertTlgUser = async (from: User | undefined) => {
    try {
        // console.log('upsertTlgUser', from)
        if(!from?.id){
            return
        }
        const db = useDrizzle()
        const existingUser = await db.query.tlgUsers.findFirst({
            where: eq(tables.tlgUsers.id, from.id),
          })
        if(!existingUser){
            const id2 = hashids.encode(from.id)
            await db.insert(tables.tlgUsers).values({
                id: from.id,
                id2,
                first_name: from.first_name || '',
                last_name: from.last_name || '',
                username: from.username || '',
                language_code: from.language_code || '',
                created_at: new Date().getTime(),
                updated_at: new Date().getTime(),
                last_seen_at: new Date().getTime(),
            })
        }else{
            await db.update(tables.tlgUsers).set({
                first_name: from.first_name || '',
                last_name: from.last_name || '',
                username: from.username || '',
                language_code: from.language_code || '',
                updated_at: new Date().getTime(),
                last_seen_at: new Date().getTime(),
            }).where(eq(tables.tlgUsers.id, from.id))
        }
    }catch (error) {
        
    }
}