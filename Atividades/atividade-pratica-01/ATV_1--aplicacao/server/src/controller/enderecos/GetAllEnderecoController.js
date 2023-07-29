import { prisma } from '../../database/clients.js'

export class GetAllEnderecoController {

    async handle(request, response) {

        const endereco = await prisma.endereco.findMany({
            include: {
                cidades: true
            }
        });
        return response.json(endereco);
    }
}