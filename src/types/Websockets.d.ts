declare module "Websockets" {
	namespace Websockets {
				// Types & interfaces
        interface Options {
            endpoint?: string
            namespace?: string
            scheme?: string
            base_url?: string
            port?: number|null
						protocols?: Array<string>
						connection_retries?: number
						send_retries?: number
            debug: boolean
            onerror?: Function
            onclose?: Function
            onopen?: Function
            onprogress?: Function|null
				}
				
				type WSEvent = {
					callback: Function,
					once: boolean,
					namespaced: boolean
				}

        type Events = {[key: string]: Array<WSEvent>}

        type Data = any|object|string|ArrayBuffer|Blob

        class Websockets {
            // Properties
            options: Websockets.Options

            client: WebSocket|null

						_events: Websockets.Events
						
						_conn_retries: number

						_send_retries: number


            // Getters
            readonly DEFAULT_OPTIONS: Websockets.Options

            readonly CLOSE_CODES: {[key: number]: string}

            readonly DEFAULT_EVENTS: {[key: string]: string}

            readonly scheme: string

            readonly url: string

            readonly hasSupport: boolean

            readonly isInitialized: boolean

            readonly isConnecting: boolean

            readonly isOpen: boolean

            readonly isSending: boolean

            readonly isClosed: boolean

            readonly events: Websockets.Events


            // Constructor
            constructor(options: Websockets.Options)


            // Public methods
            connect(): Promise<void|Error>

            send(data?: Websockets.Data): Promise<void|Error>

            emit(type: string, payload?: any, namespaced?: boolean): Promise<void|Error>

						on(type: string, callback: Function, namespaced?: boolean): Websockets

            on(type: string, callback: Function, namespaced?: boolean): Websockets

            off(type: string, callback?: Function|null, namespaced?: boolean): Websockets

            onMessage(callback: Function): Websockets

            disconnect(): void|undefined

            destroy(): void


						// Private methods
						_on(type: string, callback: Function, namespaced?: boolean, once?: boolean): Websockets

            _instantiateClient(): void

						_checkConnection(): void
						
						_connectionRetry(): undefined|Promise<void|Error>

            _messagesHandler(): void

            _dispatch(type: string, data: Websockets.Data): void

            _namespacedType(type: string): string

            _debug(message: string, context?: string|null): void
        }
    }

    export = Websockets
}