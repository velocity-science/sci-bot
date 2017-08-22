const Slack = require('pico-slack');
const _ = require('lodash');
const glob = require('glob');
const path = require('path');

const config = require('nconf')
	.argv()
	.env({ lowerCase: true })
	.file('environment', { file: `config/${process.env.NODE_ENV || 'local'}.json` })
	.file('defaults', { file: 'config/default.json' });


Slack.setInfo('scibot', ':atom_symbol:');

const loadBots = ()=>{
	return new Promise((resolve, reject)=>{
		glob('./bots/**/*.bot.js', {}, (err, files) => {
			if(err) return reject(err);
			return resolve(files);
		})
	})
	.then((bots)=>{
		_.each(bots, (botpath)=>{
			try{
				require(botpath);
				console.log('loaded', botpath);
			}catch(err){
				console.log(err);
				Slack.error('Bot Load Error', botpath, err);
			}
		})
	})
};

Slack.connect(config.get('bot_token'))
	.then(()=>loadBots())
	.then(()=>Slack.debug('Rebooted!'))
	.catch((err)=>Slack.error('ERR', err));