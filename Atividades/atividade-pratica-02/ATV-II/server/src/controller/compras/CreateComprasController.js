import { prisma } from "../../database/clients.js"


export class CreateComprasController {

    async handle(request, response) {

        const {endereco_id, produto_id } = request.body;
        
        if (endereco_id === "" || produto_id === "") {
            return response.status(400).json({
                message: "Dados incompletos. Informe todos os campos."
            });
        }

        const compra = await prisma.compras.create({
            data: {
                endereco: {
                    connect: {
                        id: endereco_id
                    }
                },
                produto: {
                    connect: {
                        id: produto_id
                    }
                },
            }
        });

        return response.json(compra);

    }
}