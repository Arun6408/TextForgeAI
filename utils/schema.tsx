import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const aiOutputTable = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: text('formData').notNull(),  // Store formData as text (JSON)
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),  
});


export const userSubscriptionTable = pgTable('userSubscription',{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('userName'),
    active:boolean('active'),
    paymentId:varchar('paymentId'),
    joinDate:varchar('joinDate')
})