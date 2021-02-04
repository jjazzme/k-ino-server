import * as Hapi from '@hapi/hapi'
import * as Inert from'@hapi/inert'
import * as AuthBearer from 'hapi-auth-bearer-token'

import {config} from './config'
import {routes} from './routes'

const server: Hapi.Server = Hapi.server({
    port: config.server.port || 3000,
    host: config.server.host || 'localhost',
})

export async function start(): Promise<Hapi.Server> {
    server.route(routes)
    await server.start()
    return server
}

process.on('unhandledRejection', err => {
    console.log(err)
    process.exit(1)
})

start()
    .then(server => {
        console.log(`Server running on ${server.info.uri}`)
    })
    .catch(err => {
        console.log(err)
    })