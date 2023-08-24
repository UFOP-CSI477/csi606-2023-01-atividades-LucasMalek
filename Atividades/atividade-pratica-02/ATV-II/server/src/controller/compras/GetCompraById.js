import { prisma } from "../../database/clients.js"



export class GetCompraByIdController {

    async handle(request, response) {

        // request.body
        // params -> /estados/2 -> /estados/{id}
        // query -> /estados/?id=2

        const { id } = request.params;

        const compra = await prisma.compras.findUniqueOrThrow({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(compra);

    }


}