import { Router } from 'express'
import {GetAllProdutosController} from '../controller/produtos/GettAllProdutosController.js'
import {DeleteProdutosController} from '../controller/produtos/DeleteProdutosController.js'
import {UpdateProdutosController} from '../controller/produtos/UpdateProdutosController.js'
import {CreateProdutosController} from '../controller/produtos/CreateProdutosController.js'

const produtosRouter = Router()


const getallprodutoscontroller = new GetAllProdutosController()
const deleteprodutoscontroller = new DeleteProdutosController()
const createprodutoscontroller = new CreateProdutosController()
const updateprodutoscontroller = new UpdateProdutosController()


// Get All endereco
produtosRouter.get('/produtos', getallprodutoscontroller.handle);

// Delete Endereco
produtosRouter.delete('/produtos', deleteprodutoscontroller.handle);

// Create Endereco
produtosRouter.post('/produtos', createprodutoscontroller.handle);

// Update Endereco
produtosRouter.post('/produtos', updateprodutoscontroller.handle);

export {produtosRouter}