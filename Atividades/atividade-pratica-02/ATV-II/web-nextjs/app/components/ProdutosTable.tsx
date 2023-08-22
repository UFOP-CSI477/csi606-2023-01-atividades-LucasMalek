'use client'
import ProdutoDTO from "../types/ProdutosDTO";
import { useEffect, useState } from "react";

const getAllprodutos = async () => {

    const produtos = await fetch('http://localhost:5555/produtos', { cache: 'no-store' });
    return produtos.json();

}


export default function ProdutoTable() {

    const [produtos, setProdutos] = useState<ProdutoDTO[]>([]);

    useEffect(() => {
        getAllprodutos()
            .then((data) => {
                setProdutos(data);
            })
    }, []);
 
return(
    <table className="table-auto w-full border border-collapse border-stone-950">

        <thead>
            <tr>
                <th>Id</th>
                <th>Valor Unitário</th>
                <th>Descrição</th>
                <th>Created_at</th>
                <th>updated_at</th>
            </tr>
        </thead>
        <tbody>

            {
                produtos.map( (produto) => {

                    return(
                        <tr key={produto.id} className="border border-stone-400">
                            <td>{produto.id}</td>
                            <td>{produto.valor_unitario}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.created_at}</td>
                            <td>{produto.updated_at}</td>
                        </tr>
                    )

                })
            }

        </tbody>

    </table>
)

}