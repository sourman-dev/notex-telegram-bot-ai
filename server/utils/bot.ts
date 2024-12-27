import { Bot } from 'grammy'
import { upsertTlgUser } from '../database/tlgUsers'
import { useRuntimeConfig } from '#imports'


const config = useRuntimeConfig()
export const bot = new Bot(config.telegramBotToken)


bot.command('start', async (ctx) => {
  await upsertTlgUser(ctx.from)
  await ctx.reply(`Welcome to Telegram Bot! 👋, ${new Date().toString()}`)
})


// Add general message handler to debug
bot.on('message::url', async (ctx) => {
  await ctx.reply(`Received message: ${ctx.message.text}`)
})


export const setWebhook = async () => {
  const webhookUrl = `${config.public.baseUrl}/webhook`
  await bot.api.setWebhook(webhookUrl, {
    secret_token: config.webhookSecret,
    drop_pending_updates: true,
    allowed_updates: ['message', 'callback_query'], // Chi dinh cac updates ban muon nhn
  })
}