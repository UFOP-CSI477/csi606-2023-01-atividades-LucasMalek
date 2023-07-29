import { Router } from 'express'
import {GetAllEnderecoController} from '../controller/enderecos/GetAllEnderecoController.js'
import {DeleteEnderecoController} from '../controller/enderecos/DeleteEnderecoController.js'
import {UpdateEnderecoController} from '../controller/enderecos/UpdateEnderecoController.js'
import {CreateEnderecoController} from '../controller/enderecos/CreateEnderecoController.js'

const enderecoRouter = Router()


const getallenderecocontroller = new GetAllEnderecoController()
const deleteenderecocontroller = new DeleteEnderecoController()
const createenderecocontroller = new CreateEnderecoController()
const updateenderecocontroller = new UpdateEnderecoController()


// Get All endereco
enderecoRouter.get('/estados', getallenderecocontroller.handle);

// Delete Endereco
enderecoRouter.delete('/estados', deleteenderecocontroller.handle);

// Create Endereco
enderecoRouter.post('/estados', createenderecocontroller.handle);

// Update Endereco
enderecoRouter.post('/estados', updateenderecocontroller.handle);

export {enderecoRouter}