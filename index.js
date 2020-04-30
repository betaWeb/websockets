const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 9000 })

wss.on('connection', ws => {
	ws.on('message', message => {
		try {
			const data = JSON.parse(message.toString())

			if (data.type) {
				console.log(data.type, data.payload)
			} else {
				console.log(data)
			}
		} catch(e) {
			console.log(message)
		}
	})
	ws.send(JSON.stringify({ type: 'demo__connected' }))
})
