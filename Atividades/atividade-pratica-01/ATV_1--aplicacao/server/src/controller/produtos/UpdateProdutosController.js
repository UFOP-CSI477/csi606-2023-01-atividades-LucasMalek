import { prisma } from "../../database/clients.js";

export class UpdateProdutosController {



    async handle(request, response) {

        const {valor_unitario, descricao } = request.body;
        
        if (valor_unitario === "" || descricao === "") {
            return response.status(400).json({
                message: "Dados incompletos. Informe todos os campos."
            });
        }

        try {
            const produtos = await prisma.produtos.update({

                where: {
                    id
                },

                data: {
                    valor_unitario,
                    descricao,
                    updated_at: new Date()
                }

            });

            response.json(produtos);
        } catch(error) {
            response.status(400).json({
                message: "Erro na solicitação.",
                error
            })
        }
        
    }

}