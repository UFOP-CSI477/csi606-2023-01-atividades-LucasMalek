import { Router } from 'express'
import {GetAllComprasController} from '../controller/compras/GetAllCompras.js'
import {DeleteComprasController} from '../controller/compras/DeleteComprasController.js'
import {UpdateComprasController} from '../controller/compras/UpdateComprasController.js'
import {CreateComprasController} from '../controller/compras/CreateComprasController.js'

const comprasRouter = Router()


const getallcomprascontroller = new GetAllComprasController()
const deletecomprascontroller = new DeleteComprasController()
const createcomprascontroller = new CreateComprasController()
const updatecomprascontroller = new UpdateComprasController()


// Get All endereco
comprasRouter.get('/compras', getallcomprascontroller.handle);

// Delete Endereco
comprasRouter.delete('/compras', deletecomprascontroller.handle);

// Create Endereco
comprasRouter.post('/compras', createcomprascontroller.handle);

// Update Endereco
comprasRouter.post('/compras', updatecomprascontroller.handle);

export {comprasRouter}