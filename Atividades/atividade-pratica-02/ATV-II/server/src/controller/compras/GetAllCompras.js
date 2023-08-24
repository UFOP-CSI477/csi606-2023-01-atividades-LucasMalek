import { prisma } from '../../database/clients.js'

export class GetAllComprasController {

    async handle(request, response) {

        const compra = await prisma.compras.findMany();
        return response.json(compra);
    }
}