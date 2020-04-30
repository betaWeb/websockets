(function () {

	const $status = document.getElementById('status')
	const client = new Websockets({
		namespace: 'demo',
		port: 9000,
		debug: true,
		onopen() {
			console.log(client.events)
		}
	})

	$status.innerHTML = '--- Not connected ---'

	client.connect()

	client.on(Websockets.DEFAULT_EVENTS.CONNECTED, () => {
		$status.innerHTML = '--- Connected ---'
	})

	document.getElementById('send-message').addEventListener('click', () => {
		client.emit('test', { body: document.getElementById('payload').value })
	})

})()