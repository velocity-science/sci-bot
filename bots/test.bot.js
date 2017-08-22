const Slack = require('pico-slack');

Slack.onMessage((msg)=>{
	if(msg.isDirect){
		Slack.log('Test Bot was triggered');
		Slack.msg(msg.user, 'Hello!');
	}
});