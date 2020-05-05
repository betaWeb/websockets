declare module "WebsocketsMessage" {
    namespace WebsocketsMessage {
				// Types & interfaces
				type Data = any|object|string|ArrayBuffer|Blob

        class WebsocketsMessage {
            // Properties
						_data: WebsocketsMessage.Data
						
						_size: Number


            // Getters
						readonly data: WebsocketsMessage.Data

            readonly size: Number


            // Constructor
            constructor(data: WebsocketsMessage.Data)


            // Public methods
						serialize(): string|ArrayBuffer|Blob

						unserialize(): WebsocketsMessage.Data
        }
    }

    export = WebsocketsMessage
}