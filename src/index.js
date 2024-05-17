import TelegramBot from '@codebam/cf-workers-telegram-bot';

export default {
	async fetch(request, env, ctx) {
		const bot = new TelegramBot(env.TOKEN);
		await bot
			.on('start', async function (context) {
				switch (context.update_type) {
					case 'message':
						await context.reply('Hello from Cloudflare workers');
						break;

					default:
						break;
				}
			})
			.handle(request.clone());
		return new Response('Hello World!');
	},
};
