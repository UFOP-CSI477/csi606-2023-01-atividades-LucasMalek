import { prisma } from "../../database/clients.js"


export class CreateProdutosController {

    async handle(request, response) {

        const {valor_unitario, descricao } = request.body;
        
        if (valor_unitario === "" || descricao === "") {
            return response.status(400).json({
                message: "Dados incompletos. Informe todos os campos."
            });
        }

        const endereco = await prisma.produtos.create({
            data: {
                valor_unitario,
                descricao
            }
        });

        return response.json(produtos);

    }
}