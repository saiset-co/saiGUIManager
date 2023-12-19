function formationObjectConfig(configs) {
    let objectData = {}

    switch (configs.nameService) {
        case "ETHcontracts":
            objectData = {...configs};
            break;
        case "goLachesis":
            objectData = {...configs};
            break;
        case "saiAuth":
            objectData = {...configs};
            objectData.items = [
            // {label: 'socket enabled: ', get data() { return objectData.common.socket.enabled; }},
            {label: 'socket port: ', get data() { return objectData.common.socket.port; }},
            // {label: 'http enabled: ', get data() { return objectData.common.http.enabled; }},
            {label: 'http port: ', get data() { return objectData.common.http.port; }},
            // {label: 'ws enabled: ', get data() { return objectData.common.ws.enabled; }},
            {label: 'ws port: ', get data() { return objectData.common.ws.port; }},
            {label: 'storage url: ', get data() { return objectData.common.storage.url; }},
            {label: 'sms url: ', get data() { return objectData.common.sms.url; }},
            {label: 'email url: ', get data() { return objectData.common.email.url; }},
            {label: 'auth url: ', get data() { return objectData.common.auth.url; }},
        ];
            break;
        case "saiCypto":
            objectData = {...configs};
            break;
        case "saiETHContractExplorer":
            objectData = {...configs};
            objectData.items = [
                // {label: 'HttpServer: ', get data() { return `${objectData.HttpServer.Host}:${objectData.HttpServer.Port}`; }},
                {label: 'HttpServer Host: ', get data() { return objectData.HttpServer.Host; }},
                {label: 'HttpServer Port: ', get data() { return objectData.HttpServer.Port; }},
                {label: 'Storage Url: ', get data() { return objectData.Storage.Url; }},
                {label: 'WebSocket Url: ', get data() { return objectData.WebSocket.Url; }},
            ];
            break;
        case "saiETHContractInteraction":
            objectData = {...configs};
            objectData.items = [
                {label: 'HttpServer Host: ', get data() { return objectData.HttpServer.Host; }},
                {label: 'HttpServer Port: ', get data() { return objectData.HttpServer.Port; }},
                {label: 'Storage Url: ', get data() { return objectData.Storage.Url; }},
            ];
            break;
        case "saiEthIndexer":
            objectData = {...configs};
            objectData.items = [
                // {label: 'http_server enabled: ', get data() { return objectData.common.http_server.enabled; }},
                {label: 'http_server host: ', get data() { return objectData.common.http_server.host; }},
                {label: 'http_server port: ', get data() { return objectData.common.http_server.port; }},
                // {label: 'socket_server enabled: ', get data() { return objectData.common.socket_server.enabled; }},
                {label: 'socket_server host: ', get data() { return objectData.common.socket_server.host; }},
                {label: 'socket_server port: ', get data() { return objectData.common.socket_server.port; }},
                // {label: 'web_socket enabled: ', get data() { return objectData.common.web_socket.enabled; }},
                {label: 'storage url: ', get data() { return objectData.specific.storage.url; }},
                {label: 'web_socket url: ', get data() { return objectData.common.web_socket.url; }},

            ];
            break;
        case "saiFramework":
            objectData = {...configs};
            objectData.items = [
                {label: 'http_server enabled: ', get data() { return objectData.common.http_server.enabled; }},
                {label: 'http_server host: ', get data() { return objectData.common.http_server.host; }},
                {label: 'http_server port: ', get data() { return objectData.common.http_server.port; }},
                {label: 'socket_server enabled: ', get data() { return objectData.common.socket_server.enabled; }},
                {label: 'socket_server host: ', get data() { return objectData.common.socket_server.host; }},
                {label: 'socket_server port: ', get data() { return objectData.common.socket_server.port; }},
                {label: 'web_socket enabled: ', get data() { return objectData.common.web_socket.enabled; }},
                {label: 'web_socket url: ', get data() { return objectData.common.web_socket.url; }},
            ];
            break;
        case "saiMessage":
            objectData = {...configs};
            break;
        case "saiP2PGo":
            objectData = {...configs};
            objectData.items = [
                {label: 'p2p port: ', get data() { return objectData.p2p.port; }},
                // {label: 'p2p slot: ', get data() { return objectData.p2p.slot; }},
                {label: 'http port: ', get data() { return objectData.http.port; }},

            ];
            break;
        case "saiService":
            objectData = {...configs};
            objectData.items = [
                // {label: 'http enabled: ', get data() { return objectData.common.http.enabled; }},
                {label: 'http port: ', get data() { return objectData.common.http.port; }},
                // {label: 'ws enabled: ', get data() { return objectData.common.ws.enabled; }},
                {label: 'ws port: ', get data() { return objectData.common.ws.port; }},
            ];
            break;
        case "saiStorageMongo":
            objectData = {...configs};
            objectData.items = [
                {label: 'HttpServer Host: ', get data() { return objectData.HttpServer.Host; }},
                {label: 'HttpServer Port: ', get data() { return objectData.HttpServer.Port; }},
                {label: 'HttpsServer Host: ', get data() { return objectData.HttpsServer.Host; }},
                {label: 'HttpsServer Port: ', get data() { return objectData.HttpsServer.Port; }},
                {label: 'Storage Host: ', get data() { return objectData.Storage.Host; }},
                {label: 'Storage Port: ', get data() { return objectData.Storage.Port; }},
                {label: 'WebSocket Url: ', get data() { return objectData.WebSocket.Url; }},
                {label: 'SaiAuth Host: ', get data() { return objectData.SaiAuth.Host; }},
                {label: 'SaiAuth Port: ', get data() { return objectData.SaiAuth.Port; }},

            ];
            break;
        case "saiStorageUtil":
            objectData = {...configs};
            break;
        case "saiUtil":
            objectData = {...configs};
            break;
        case "saiWebSocket":
            objectData = {...configs};
            break;
        default:
            objectData = {...configs};
            break;
    }

    return objectData;

}