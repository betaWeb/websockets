# Websockets

A simple JavaScript class to handle browser-side Websockets.

> Note : this library provides an API only for browser-side Websokets.

## Getting started

Include `Websockets.min.js` script in your HTML :
```html
<script defer src="path/to/Websockets.min.js"></script>
```

And declare a new instance in your script :
```javascript
const client = new Websockets({
    port: 9000,
    scheme: 'ws',
    onprogress(progress, dataSize, data) {
        if (progress === 0) {
            console.log('Data sended successfully !')
        } else {
            console.log(`${dataSize - progress}/${dataSize} bytes have been sent.`)
        }
    }
})

client.on(Websockets.DEFAULT_EVENTS.CONNECTED, () => {
    console.log("It's alive ! ALIVE !")
})

client.on('wakedup', () => {
    console.log("Waked up !")
})

await client.connect()

await client.emit('wakeup', { body: "It's time to wake up !" })

client.destroy()
```

And.. that's it ! :) 

<br><br>

## Available getters and methods
### Getters
```typescript
// Websockets class default options
static DEFAULT_OPTIONS: Object.<String, any>

// WebSocket native API close codes
static CLOSE_CODES: Object.<Number, String>
// Websockets class default events
static DEFAULT_EVENTS: Object.<String, String>

// WebSocket schme ('auto', 'ws', 'wss')
scheme: String

// WebSocket URL
url: String

// Registered events via `Websockets.on()` method
events: Object.<String, Function[]>

// returns true if WebSocket API is supported by the browser, false otherwise
hasSupport: Boolean

// returns true if WebSocket client is instantiated, false otherwise
isInitialized: Boolean

// returns true if WebSocket client is connecting, false otherwise
isConnecting: Boolean

// returns true if WebSocket client is connected, false otherwise
isOpen: Boolean

// returns true if WebSocket client is sending data, false otherwise
isSending: Boolean

// returns true if WebSocket connection is closing or closed, false otherwise
isClosed: Boolean
```

<br><br>

### Methods
* `connect(): Promise`

Connect the WebSocket client to the specified endpoint.

```javascript
await client.connect()
```

<br>

* `send(data: any): Promise`

send data to server

```javascript
await client.send('PING')
```

<br>

* `emit(type: String, payload?: any = '', namespaced?: boolean = true): Promise`

Format a data object with `type` and `payload`, and send it to the server. If `namespaced` is false, `type` parameter will doesn't be prefixed by the namespace specified in the Websockets instance options.

```javascript
// Emit 'USER_MESSAGE' event to the server with a payload
await client.emit('USER_MESSAGE', { message: 'Hello, World !', user_id: 1 })


// Emit 'USER_MESSAGE' event to the server with a payload and without namespace
await client.emit('USER_MESSAGE', { message: 'Hello, World !', user_id: 1 }, false)
```

<br>

* `on(type: String, callback: Function, namespaced?: boolean = true): Websockets`

Add an event. If `namespaced` is false, `type` parameter will doesn't be prefixed by the namespace specified in the Websockets instance options.

```javascript
// Listen to 'PONG' event from the server
client.on('PONG', () => console.log('The server responds with PONG !'))

// Send 'PING' event to the server
await client.send('PING')
```

<br>

* `off(type: String, callback?: Function = null, namespaced?: boolean = true): Websockets`

Removes an event. if `callback` parameter is `null`, all events of type `type` will be removed, otherwise, only the event that corresponds to the `callback` parameter will be removed. If `namespaced` is false, `type` parameter doesn't be prefixed by the namespace specified in the Websockets instance options.

```javascript
const onPong = () => console.log("The server responds with PONG !\n")

// Listen to 'PONG' event from the server
client.on('PONG', onPong)

// Send 'PING' event to the server
await client.send('PING')

// Detach 'PONG' event listener
client.off('PONG', onPong)
```

<br>

* `onMessage(callback: Function): Websockets` the `callback`

parameter will be triggered with each message sent from the server.

```javascript
client.onMessage(data => console.log(data))
```

<br>

* `disconnect(): void`

disconnect the WebSocket client.

```javascript
client.disconnect()
```

<br>

* `destroy(): void`

Remove all Websockets events and disconnect the WebSocket client.

```javascript
client.destroy()
```

<br><br>

## Instance options

TODO

<br><br>