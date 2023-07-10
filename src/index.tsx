import React from "react";
import ReactDOM from "react-dom";
import {createServer, Model} from 'miragejs'
import { App } from './App'

createServer({
    models: {
        transaction: Model,
    },
    seeds(server){
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Desenvolvimento de Sites',
                    type: 'deposit',
                    category: 'Atendimento',
                    amount: 2500,
                    createdAt: new Date('2023-04-06 10:00:00'),

                },
                {
                    id: 2,
                    title: 'Aluguel',
                    type: 'withdraw',
                    category: 'Atendimento',
                    amount: 1000,
                    createdAt: new Date('2023-04-07 10:00:00'),

                }
            ]
        })
    },
    routes() {
        this.namespace = 'api';

        this.get('/transactions', ()=>{
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create('transaction', data)
        })
    },
})

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
