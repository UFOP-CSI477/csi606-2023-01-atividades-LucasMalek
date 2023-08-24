import express from 'express'
import cors from 'cors';

import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js';
import { cidadeRouter } from './routes/cidades.js';
import { enderecoRouter } from './routes/endereço.js'
import { comprasRouter } from './routes/compras.js'
import { produtosRouter } from './routes/produtos.js'

const app = express();
app.use(express.json());
app.use(cors())

const PORT = 5555;

// Routes:
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(enderecoRouter)
app.use(comprasRouter)
app.use(produtosRouter)

// Server - start/listen:
app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
});