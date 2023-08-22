import { prisma } from "../../database/clients.js";

export class UpdateComprasController {
    async handle(request, response) {

        const {endereco_id, usuario_id } = request.body;
        
        if (endereco_id === "" || usuario_id === "") {
            return response.status(400).json({
                message: "Dados incompletos. Informe todos os campos."
            });
        }

        try {
            const compra = await prisma.compras.update({

                where: {
                    id
                },

                data: {
                    endereco_id,
                    usuario_id,
                    updated_at: new Date()
                }

            });

            response.json(compra);
        } catch(error) {
            response.status(400).json({
                message: "Erro na solicitação.",
                error
            })
        }
        
    }

}