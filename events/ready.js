const { webhook } = require('../config.json');
var request = require('request');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		//Start Log
		console.log(`Ready! Logged in as ${client.user.tag}`);

		//Alle 15 Sekunden
		setInterval(() => {
			//RPC
			let activity = `${client.guilds.cache.reduce((a, g) => a + g.memberCount,0)} Members`;
			client.user.setActivity(activity,
				{ type: "PLAYING" }
			);

			//Checks if the Bot is on a Server
			var members = client.guilds.cache.reduce((a, g) => a + g.memberCount,0);
			console.log(parseInt(members))
			if (parseInt(members) == 0) {
				var options = {
					'method': 'POST',
					'url': webhook,
					formData: {
						'payload_json': '{"content": "<@398101340322136075> Alarm!","embeds": [{"title": "STOP","description": "Der Bot wurde gekickt, das Projekt ist beendet!","color": 16711680}]}'
					}
				};

				request(options, function (error, response) {
					if (error) throw new Error(error);
					console.log(response.body);
				});
			}
  		},15000);
	},
};