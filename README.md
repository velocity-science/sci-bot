# sci-bot
A slackbot for Velocity Science



### development

_pre-reqs_: Node installed, private testing slack team for local testing

1. Clone the project
1. `npm install`
1. Make sure a bot token is setup in your `config/local.json`. _See Below_
1. `npm run dev` This starts the start, and will automatically reboot it on file change.
1. You'll see `"ERR" "not_authed"` in the terminal if this wasn't setup properly.
1. Check the `#diagnostics` channel for log output from your bots.



#### Add a bot integration to your slack team

1. Click on "Bots" [here](https://slack.com/apps/search?q=bots) (Double check the right team is selected in the upper right)
1. Click "Add Configuration"
1. Add bot name and hit "add bot integration"
1. Copy the API token to the location you need it.

**example** `config/local.json`
```
{
	"bot_token" : "xoxb-375929384-VVGfY2HHGpSwbDBrmVv3ZofBp"
}
```