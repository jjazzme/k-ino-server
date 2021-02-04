import {_config} from "./_config";
export const config = {
    server: {
        port: 3010,
        host: '0.0.0.0'
    },
    jwt: {
        key: _config.jwt.key
    }
}