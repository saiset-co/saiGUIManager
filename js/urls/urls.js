const configsURL = {
    ETHcontracts: {
        docker: '',
        microservice: ''
    },
    goLachesis: {
        docker: '',
        microservice: ''
    },
    saiAuth: {
        docker: 'https://api.github.com/repos/saiset-co/saiAuth/contents/docker-compose.yml',
        microservice: 'https://api.github.com/repos/saiset-co/saiAuth/contents/config.yml'
    },
    saiBft: {
        // docker: {
        //     saiBft: 'https://api.github.com/repos/saiset-co/saiBft/contents/microservices/saiBft/build/config.yml',
        //     saiP2pProxy: 'https://api.github.com/repos/saiset-co/saiBft/contents/microservices/saiP2pProxy/build/config.yml',
        //     saiStorage: 'https://api.github.com/repos/saiset-co/saiBft/contents/microservices/saiStorage/build/config.json',
        // },
        // microservice: {
        //     saiBft: 'https://api.github.com/repos/saiset-co/saiBft/contents/src/saiBft/config.yml',
        //     saiP2pProxy: 'https://api.github.com/repos/saiset-co/saiBft/contents/src/saiP2pProxy/config.yml',
        //     saiStorage: 'https://api.github.com/repos/saiset-co/saiBft/contents/src/saiStorage/config/config.json',
        // }
        docker: '',
        microservice: ''
    },
    saiCypto: {
        docker: 'https://api.github.com/repos/saiset-co/saiCypto/contents/bin/Docker/docker-compose.yml',
        microservice: ''
    },
    saiETHContractExplorer: {
        docker: '',
        microservice: 'https://api.github.com/repos/saiset-co/saiETHContractExplorer/contents/config.json'
    },
    saiETHContractInteraction: {
        docker: '',
        microservice: 'https://api.github.com/repos/saiset-co/saiETHContractInteraction/contents/config.json'
    },
    saiEthIndexer: {
        docker: 'https://api.github.com/repos/saiset-co/saiEthIndexer/contents/microservices/docker-compose.yml',
        microservice: 'https://api.github.com/repos/saiset-co/saiEthIndexer/contents/src/saiEthIndexer/config/config.json'
    },
    saiFramework: {
        docker: '',
        microservice: 'https://api.github.com/repos/saiset-co/saiFramework/contents/config/config.yaml'
    },
    saiMessage: {
        docker: '',
        microservice: ''
    },
    saiP2PGo: {
        docker: '',
        microservice: 'https://api.github.com/repos/saiset-co/saiP2P-go/contents/config.yml'
    },
    saiService: {
        docker: '',
        microservice: 'https://api.github.com/repos/saiset-co/saiService/contents/Boilerplate/config.yml'
    },
    saiServices: {
        docker: '',
        microservice: ''
    },
    saiStorageMongo: {
        docker: 'https://api.github.com/repos/saiset-co/saiStorageMongo/contents/docker-compose.yml',
        microservice: 'https://api.github.com/repos/saiset-co/saiStorageMongo/contents/config.json'
    },
    saiStorageUtil: {
        docker: '',
        microservice: ''
    },
    saiUtil: {
        docker: '',
        microservice: ''
    },
    saiWebSocket: {
        docker: 'https://api.github.com/repos/saiset-co/saiWebSocket/contents/docker/docker-compose.yml',
        microservice: ''
    },
}

const pathToConfig = {
    ETHcontracts: {
        docker: '',
        microservice: ''
    },
    goLachesis: {
        docker: '',
        microservice: ''
    },
    saiAuth: {
        docker: 'docker-compose.yml',
        microservice: 'config.yml'
    },
    saiBft: {
        docker: {
            saiBft: 'microservices/saiBft/build/config.yml',
            saiP2pProxy: 'microservices/saiP2pProxy/build/config.yml',
            saiStorage: 'microservices/saiStorage/build/config.json',
        },
        microservice: {
            saiBft: 'src/saiBft/config.yml',
            saiP2pProxy: 'src/saiP2pProxy/config.yml',
            saiStorage: 'src/saiStorage/config.json',

        }
    },
    saiCypto: {
        docker: 'bin/Docker/docker-compose.yml',
        microservice: ''
    },
    saiETHContractExplorer: {
        docker: '',
        microservice: 'config.json'
    },
    saiETHContractInteraction: {
        docker: '',
        microservice: 'config.json'
    },
    saiEthIndexer: {
        docker: 'microservices/docker-compose.yml',
        microservice: 'src/saiEthIndexer/config/config.json'
    },
    saiFramework: {
        docker: '',
        microservice: 'config/config.yaml'
    },
    saiMessage: {
        docker: '',
        microservice: ''
    },
    saiP2PGo: {
        docker: '',
        microservice: 'config.yml'
    },
    saiService: {
        docker: '',
        microservice: 'Boilerplate/config.yml'
    },
    saiServices: {
        docker: '',
        microservice: ''
    },
    saiStorageMongo: {
        docker: 'docker-compose.yml',
        microservice: 'config.json'
    },
    saiStorageUtil: {
        docker: '',
        microservice: ''
    },
    saiUtil: {
        docker: '',
        microservice: ''
    },
    saiWebSocket: {
        docker: 'docker/docker-compose.yml',
        microservice: ''
    },
}