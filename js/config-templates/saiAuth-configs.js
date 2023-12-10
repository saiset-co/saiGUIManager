// const template = {
//     "services": {
//         "auth": {
//             "build": {
//                 "context": ".",
//                 "dockerfile": "Dockerfile"
//             },
//             "ports": [
//                 "9080:9080"
//             ],
//             "depends_on": [
//                 "auth-sai-storage-mongo"
//             ],
//             "volumes": [
//                 "./config.yml:/srv/config.yml"
//             ]
//         }
//     },
//     "volumes": {
//         "auth_mongo_data": {}
//     },
//     "nameService": "ETHcontracts"
// }
//
// const itemDokerTempl =
//     $(go.Panel, "Vertical",
//         {
//             row: 1
//         },
//         $(go.TextBlock, {
//             font: "14px sans-serif",
//             margin: new go.Margin(0, 5, 5, 5) // Змініть відстань знизу
//         }, new go.Binding("text", "services", (service) => {
//             if (service) {
//                 return `ports: ${service.auth.ports[0]}`
//             } else {
//                 return ""
//             }
//             // service ? `ports: ${service.auth.ports}` : ""
//         })),
//         $(go.TextBlock, {
//             font: "14px sans-serif",
//             margin: new go.Margin(0, 5, 5, 5) // Змініть відстань знизу
//         }, new go.Binding("text", "services", (service) => {
//             if (service) {
//                 return `depends_on: ${service.auth.depends_on[0]}`
//             } else {
//                 return ""
//             }
//             // service ? `ports: ${service.auth.ports}` : ""
//         })));
//
// const saiAuthConfigsObject = {
//     name: "saiAuth",
//     items: [
//         {data: ''},
//         {data: ''},
//     ]
// }