# Websockets

A simple JavaScript class to handle browser-side Websockets.

## Getting started

Just include `Websockets.min.js` in your HTML :
```html
<script defer src="path/to/Websockets.min.js"></script>
```

And declare a new instance in your script :
```javascript
const client = new Websockets({
    port: 9000,
    sheme: 'ws'
})

client.connect()

client.on(Websockets.DEFAULT_EVENTS.CONNECTED, () => {
    console.log("It's alive ! ALIVE !")
})

client.emit('wakeup', { body: "It's time to leave the bed !" })
```

And.. that's it ! :) 
