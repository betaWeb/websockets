(async function () {

	const $status = document.getElementById('status')
	const client = new Websockets({
		namespace: 'demo',
		base_url: 'localhost',
		port: 9000,
		debug: true,
		onopen() {
			console.log(client.events)
		},
		onprogress(progress, data) {
			console.log(progress, data)
		}
	})

	$status.innerHTML = '--- Not connected ---'

	await client.connect()

	client.on(Websockets.DEFAULT_EVENTS.CONNECTED, () => {
		$status.innerHTML = '--- Connected ---'
	})

	document.getElementById('send-message').addEventListener('click', () => {
		client.emit('test', { body: document.getElementById('payload').value })
	})

})()