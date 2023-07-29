import { prisma } from '../../database/clients.js'

export class GetAllProdutosController {

    async handle(request, response) {

        const produto = await prisma.produtos.findMany({
            include: {
                id: true
            }
        });
        return response.json(produto);
    }
}