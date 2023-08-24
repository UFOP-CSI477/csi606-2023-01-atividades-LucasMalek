import { prisma } from "../../database/clients.js"



export class GetEnnderecoByIdController {

    async handle(request, response) {

        // request.body
        // params -> /estados/2 -> /estados/{id}
        // query -> /estados/?id=2

        const { id } = request.params;

        const endereco = await prisma.endereco.findUniqueOrThrow({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(endereco);

    }


}