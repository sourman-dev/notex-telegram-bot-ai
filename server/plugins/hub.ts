import {bot, setWebhook } from '../utils/bot'
export default defineNitroPlugin(() => {
  onHubReady(async () => {
    if(!import.meta.dev){
      console.log('Bot started in webhook mode')
      await bot.init()
      await setWebhook()
    }else{
      console.log('Bot started in polling mode')
      await bot.init()
      await bot.start()
    }
  })
})
