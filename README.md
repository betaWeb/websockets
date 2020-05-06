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

<br><br><br>

## Available getters and methods
### Getters
```typescript
// Websockets class default options
static DEFAULT_OPTIONS: Object.<String, any>

// WebSocket native API close codes by status
static CLOSE_STATUS: Object.<String, Number>

// WebSocket  native API close messages by codes
static CLOSE_STATUS_MESSAGES: Object.<Number, String>

// Websockets class default events
static DEFAULT_EVENTS: Object.<String, String>

// returns true if WebSocket API is supported by the actual browser, false otherwise
static hasSupport: Boolean

// WebSocket schme ('auto', 'ws', 'wss')
scheme: String

// WebSocket URL
url: String

// Registered events via `Websockets.on()` method
events: Object.<String, Array>

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

<br><br><br>

### Methods

```typescript
connect(): Promise
```

Connect the WebSocket client to the specified endpoint.

__Example :__
```javascript
await client.connect()
```

<br><hr><br>

```typescript
send(data: any): Promise
```

send data to the server.

__Example :__
```javascript
await client.send('PING')
```

<br><hr><br>

```typescript
emit(type: String, payload?: any = '', namespaced?: boolean = true): Promise
```

Format a data object with `type` and `payload`, and send it to the server. If `namespaced` is false, `type` parameter will doesn't be prefixed by the namespace specified in the Websockets instance options.

__Example :__
```javascript
// Emit 'USER_MESSAGE' event to the server with a payload
await client.emit('USER_MESSAGE', { message: 'Hello, World !', user_id: 1 })


// Emit 'USER_MESSAGE' event to the server with a payload and without namespace
await client.emit('USER_MESSAGE', { message: 'Hello, World !', user_id: 1 }, false)
```

<br><hr><br>

```typescript
on(type: String, callback: Function, namespaced?: boolean = true): Websockets
```

Add an event. If `namespaced` is false, `type` parameter will doesn't be prefixed by the namespace specified in the Websockets instance options.

__Example :__
```javascript
// Listen to 'PONG' event from the server
client.on('PONG', () => console.log('The server responds with PONG !'))

// Send 'PING' event to the server
await client.send('PING')
```

<br><hr><br>

```typescript
once(type: String, callback: Function, namespaced?: boolean = true): Websockets
```

Add an event. This event will be listenend only once. After that, it will be deleted.
If `namespaced` is false, `type` parameter will doesn't be prefixed by the namespace specified in the Websockets instance options.

__Example :__
```javascript
// Listen to 'PONG' event from the server
client.once('PONG', () => console.log('This event is unique !'))

// Send 'PING' event to the server
await client.send('PING')
```

<br><hr><br>

```typescript
off(type: String, callback?: Function = null, namespaced?: boolean = true): Websockets
```

Removes an event. if `callback` parameter is `null`, all events of type `type` will be removed, otherwise, only the event that corresponds to the `callback` parameter will be removed. If `namespaced` is false, `type` parameter doesn't be prefixed by the namespace specified in the Websockets instance options.

__Example :__
```javascript
const onPong = () => console.log("The server responds with PONG !\n")

// Listen to 'PONG' event from the server
client.on('PONG', onPong)

// Send 'PING' event to the server
await client.send('PING')

// Detach 'PONG' event listener
client.off('PONG', onPong)
```

<br><hr><br>

```typescript
onMessage(callback: Function): Websockets
```

The callback parameter will be triggered with each message sent from the server.

__Example :__
```javascript
client.onMessage(data => console.log(data))
```

<br><hr><br>

```typescript
disconnect(): void
```

disconnect the WebSocket client.

__Example :__
```javascript
client.disconnect()
```

<br><hr><br>

```typescript
destroy(): void
```

Remove all Websockets events and disconnect the WebSocket client.

__Example :__
```javascript
client.destroy()
```

<br><br><br>

## Instance options

TODO

<br><br>