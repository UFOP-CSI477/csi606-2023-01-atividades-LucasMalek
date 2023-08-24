import { Router } from 'express'
import {GetAllEnderecoController} from '../controller/enderecos/GetAllEnderecoController.js'
import {DeleteEnderecoController} from '../controller/enderecos/DeleteEnderecoController.js'
import {UpdateEnderecoController} from '../controller/enderecos/UpdateEnderecoController.js'
import {CreateEnderecoController} from '../controller/enderecos/CreateEnderecoController.js'
import { GetEnnderecoByIdController } from '../controller/enderecos/GetEnderecoByIdController.js'
const enderecoRouter = Router()


const getallenderecocontroller = new GetAllEnderecoController()
const deleteenderecocontroller = new DeleteEnderecoController()
const createenderecocontroller = new CreateEnderecoController()
const updateenderecocontroller = new UpdateEnderecoController()
const getByIdEnderecoController = new GetEnnderecoByIdController();

// Get All endereco
enderecoRouter.get('/endereco', getallenderecocontroller.handle);

// Delete Endereco
enderecoRouter.delete('/endereco', deleteenderecocontroller.handle);

// Create Endereco
enderecoRouter.post('/endereco', createenderecocontroller.handle);

// Update Endereco
enderecoRouter.post('/endereco/:id', updateenderecocontroller.handle);

// Get By Id
enderecoRouter.get('/endereco/:id', getByIdEnderecoController.handle);

export {enderecoRouter}