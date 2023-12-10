function formationObjectConfig(configs) {
    const objectData = {}

    switch (configs.nameService) {
        case "ETHcontracts":
            objectData.nameService = configs.nameService;
            objectData.items = [];
            break;
        case "goLachesis":
            objectData.nameService = configs.nameService;
            break;
        case "saiAuth":
            objectData.nameService = configs.nameService;
            objectData.items = [
                {data: `socket enabled: ${configs.common.socket.enabled}`},
                {data: `socket port: ${configs.common.socket.port}`},
                {data: `http enabled: ${configs.common.http.enabled}`},
                {data: `http port: ${configs.common.http.port}`},
                {data: `ws enabled: ${configs.common.ws.enabled}`},
                {data: `ws port: ${configs.common.ws.port}`},
            ];
            objectData.common_storage_url= configs.common.storage.url;
            objectData.common_storage_token= configs.common.storage.token;
            objectData.common_sms_url= configs.common.sms.url;
            objectData.common_sms_master_key= configs.common.sms.master_key;
            objectData.common_email_url= configs.common.email.url;
            objectData.common_email_sender= configs.common.email.sender;
            objectData.common_encryption_salt= configs.common.encryption.salt;
            objectData.common_auth_flood_limit= configs.common.auth.flood_limit;
            objectData.common_auth_flood_duration= configs.common.auth.flood_duration;
            objectData.common_auth_url= configs.common.auth.url;
            break;
        case "saiCypto":
            objectData.nameService = configs.nameService;
            break;
        case "saiETHContractExplorer":
            objectData.nameService = configs.nameService;
            objectData.items = [
                {data: `HttpServer Host: ${configs.HttpServer.Host}`},
                {data: `HttpServer Port: ${configs.HttpServer.Port}`},
                {data: `WebSocket Url: ${configs.WebSocket.Url}`},
            ];
            objectData.Storage_Url= configs.Storage.Url;
            objectData.Storage_Auth_Email= configs.Storage.Auth.Email;
            objectData.Storage_Auth_Password= configs.Storage.Auth.Password;
            objectData.Contract= configs.Contract;
            objectData.Sleep= configs.Sleep;
            break;
        case "saiETHContractInteraction":
            objectData.nameService = configs.nameService;
            objectData.items = [
                {data: `HttpServer Host: ${configs.HttpServer.Host}`},
                {data: `HttpServer Port: ${configs.HttpServer.Port}`},
            ];
            objectData.Storage_Url= configs.Storage.Url;
            objectData.Storage_Auth_Email= configs.Storage.Auth.Email;
            objectData.Storage_Auth_Password= configs.Storage.Auth.Password;
            objectData.Geth= configs.Geth;
            objectData.GasLimit= configs.GasLimit;
            objectData.Contract_ABI= configs.Contract.ABI;
            objectData.Contract_Address= configs.Contract.Address;
            objectData.Contract_Private= configs.Contract.Private;
            objectData.Crypto= configs.Crypto;
            break;
        case "saiEthIndexer":
            objectData.nameService = configs.nameService;
            objectData.items = [
                {data: `http_server enabled: ${configs.common.http_server.enabled}`},
                {data: `http_server host: ${configs.common.http_server.host}`},
                {data: `http_server port: ${configs.common.http_server.port}`},
                {data: `socket_server enabled: ${configs.common.socket_server.enabled}`},
                {data: `socket_server host: ${configs.common.socket_server.host}`},
                {data: `socket_server port: ${configs.common.socket_server.port}`},
                {data: `web_socket enabled: ${configs.common.web_socket.enabled}`},
                {data: `web_socket url: ${configs.common.web_socket.url}`},
            ];
            objectData.specific_geth_server= configs.geth_server;
            objectData.specific_storage_token= configs.specific.storage.token;
            objectData.specific_storage_url= configs.specific.storage.url;
            objectData.specific_storage_email= configs.specific.storage.email;
            objectData.specific_storage_password= configs.specific.storage.password;
            objectData.specific_start_block= configs.specific.start_block;
            objectData.specific_skipFailedTransactions= configs.specific.skipFailedTransactions;
            objectData.specific_sleep= configs.specific.sleep;
            break;
        case "saiFramework":
            objectData.nameService = configs.nameService;
            objectData.items = [
                {data: `http_server enabled: ${configs.common.http_server.enabled}`},
                {data: `http_server host: ${configs.common.http_server.host}`},
                {data: `http_server port: ${configs.common.http_server.port}`},
                {data: `socket_server enabled: ${configs.common.socket_server.enabled}`},
                {data: `socket_server host: ${configs.common.socket_server.host}`},
                {data: `socket_server port: ${configs.common.socket_server.port}`},
                {data: `web_socket enabled: ${configs.common.web_socket.enabled}`},
                {data: `web_socket url: ${configs.common.web_socket.url}`},
            ];
            objectData.specific_token= configs.specific.token;
            objectData.specific_mongo_atlas= configs.specific.mongo.atlas;
            objectData.specific_mongo_user= configs.specific.mongo.user;
            objectData.specific_mongo_pass= configs.specific.mongo.pass;
            objectData.specific_mongo_host= configs.specific.mongo.host;
            objectData.specific_mongo_port= configs.specific.mongo.port;
            objectData.specific_mongo_database= configs.specific.mongo.database;
            objectData.specific_mongo_collection= configs.specific.mongo.collection;
            break;
        case "saiMessage":
            objectData.nameService = configs.nameService;
            break;
        case "saiP2PGo":
            objectData.nameService = configs.nameService;
            objectData.items = [
                {data: `p2p port: ${configs.p2p.port}`},
                {data: `p2p slot: ${configs.p2p.slot}`},
                {data: `http port: ${configs.http.port}`},
            ];
            objectData.peers= configs.peers;
            objectData.debug= configs.debug;
            break;
        case "saiService":
            objectData.nameService = configs.nameService;
            objectData.items = [
                {data: `http enabled: ${configs.common.http.enabled}`},
                {data: `http port: ${configs.common.http.port}`},
                {data: `ws enabled: ${configs.common.ws.enabled}`},
                {data: `ws port: ${configs.common.ws.port}`},
            ];
            objectData.common_test= configs.test;
            break;
        case "saiStorageMongo":
            objectData.nameService = configs.nameService;
            objectData.items = [
                {data: `HttpServer Host: ${configs.HttpServer.Host}`},
                {data: `HttpServer Port: ${configs.HttpServer.Port}`},
                {data: `HttpsServer Host: ${configs.HttpsServer.Host}`},
                {data: `HttpsServer Port: ${configs.HttpsServer.Port}`},
                {data: `Storage Host: ${configs.Storage.Host}`},
                {data: `Storage Port: ${configs.Storage.Port}`},
                {data: `WebSocket Url: ${configs.WebSocket.Url}`},
            ];
            objectData.UsePermissionAuth= configs.UsePermissionAuth;
            objectData.SaiAuth_Host= configs.SaiAuth.Host;
            objectData.SaiAuth_Port= configs.SaiAuth.Port;
            objectData.Duplication= configs.Duplication;
            objectData.DuplicationURL= configs.DuplicationURL;
            objectData.DuplicateTimeout= configs.DuplicateTimeout;
            objectData.DuplicatePause= configs.DuplicatePause;
            objectData.DuplicateMethod= configs.DuplicateMethod;
            break;
        case "saiStorageUtil":
            objectData.nameService = configs.nameService;
            break;
        case "saiUtil":
            objectData.nameService = configs.nameService;
            break;
        case "saiWebSocket":
            objectData.nameService = configs.nameService;
            break;
        default:
            objectData.nameService = configs.nameService;
            break;

    }

    return objectData;

}