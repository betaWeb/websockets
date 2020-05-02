# Websockets

A simple JavaScript class to handle browser-side Websockets.

> Note : this library provides an API only for browser-side Websokets.

## Getting started

Just include `Websockets.min.js` in your HTML :
```html
<script defer src="path/to/Websockets.min.js"></script>
```

And declare a new instance in your script :
```javascript
(async function () {
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
})()
```

And.. that's it ! :) 

<br>

## Available getters and methods
### Getters
* `static DEFAULT_OPTIONS: Object.<String, any>` Websockets class default options
* `static CLOSE_CODES: Object.<Number, String>` WebSocket native API close codes
* `static DEFAULT_EVENTS: Object.<String, String>` Websockets class default events
* `scheme: String`
* `url: String`
* `hasSupport: Boolean` returns true if WebSocket API is supported by the browser, false otherwise
* `isInitialized: Boolean` returns true if WebSocket client is instantiated, false otherwise
* `isConnecting: Boolean` returns true if WebSocket client is connecting, false otherwise
* `isOpen: Boolean` returns true if WebSocket client is connected, false otherwise
* `isSending: Boolean` returns true if WebSocket client is sending data, false otherwise
* `isClosed: Boolean` returns true if WebSocket connection is closing or closed, false otherwise
* `events: Object.<String, Function[]>`

### Methods
* `connect(): Promise`
* `send(data: any): Promise` send data to server
* `emit(type: String, payload?: any = '', namespaced?: boolean = true): Promise` format a data object with `type` and `payload`, and send it to the server. If `namespaced` is false, `type` parameter will doesn't be prefixed by the namespace specified in the Websockets instance options.
* `on(type: String, callback: Function, namespaced?: boolean = true): Websockets` Add an event. If `namespaced` is false, `type` parameter will doesn't be prefixed by the namespace specified in the Websockets instance options.
* `off(type: String, callback?: Function = null, namespaced?: boolean = true): Websockets` Removes an event. if `callback` parameter is `null`, all events of type `type` will be removed, otherwise, only the event that corresponds to the `callback` parameter will be removed. If `namespaced` is false, `type` parameter doesn't be prefixed by the namespace specified in the Websockets instance options.
* `onMessage(callback: Function): Websockets` the `callback` parameter will be triggered with each message sent from the server.
* `disconnect(): void` disconnect the WebSocket client.
* `destroy(): void` Remove all Websockets events and disconnect the WebSocket client.
