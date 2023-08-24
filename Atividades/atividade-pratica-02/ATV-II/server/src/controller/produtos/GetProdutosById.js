import { prisma } from "../../database/clients.js"



export class GetProdutosByIdController {

    async handle(request, response) {

        // request.body
        // params -> /estados/2 -> /estados/{id}
        // query -> /estados/?id=2

        const { id } = request.params;

        const produto = await prisma.produto.findUniqueOrThrow({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(produto);

    }


}