import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import { prisma } from "../../database/clients.js";

export class DeleteComprasController {

    async handle(request, response) {

        try {
            
            const { id } = request.body;
            console.log(id);

            const compra = await prisma.compras.delete({
                where: {
                    id
                }
            });

            return response.json(compra);
        } catch (error) {
            
            if ( error instanceof PrismaClientKnownRequestError ) {
                return response.status(400).json({
                    message: "Erro na exclusão do estado.",
                    error
                });
            }

            return response.status(500).json({
                error,
                id
            });

        }

    }
}