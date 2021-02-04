//import * as Hapi from '@hapi/hapi'
import * as Joi from 'joi'

export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return {
                name: 'k-ino',
                up: true
            }
        }
    },
    {
        method: 'GET',
        path: '/joi/{id}',
        handler: (req, h) => {
            return {
                name: 'joi',
                id: req.params.id
            }
        },
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.number().integer().min(10).max(100)
                })
            }
        }
    }
]