'use client'
import CompraDTO from "../types/CompraDTO";
import { useEffect, useState } from "react";

const getAllCompra = async () => {

    const compras = await fetch('http://localhost:5555/compras', { cache: 'no-store' });
    return compras.json();

}



export default function CompraTable() {

    const format = (dateString : string | undefined) => {
        
        if (dateString === undefined) {
            return;
        }

        const dateObj = new Date(dateString);

        return dateObj.toLocaleString('pt-br');

    }

    const [compras, setCompra] = useState<CompraDTO[]>([]);

    useEffect(() => {
        getAllCompra()
            .then((data) => {
                setCompra(data);
            })
    }, []);

    return(
        <table className="table-auto w-full border border-collapse border-stone-950">

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Data</th>
                    <th>Endereco</th>
                    <th>Produto</th>
                    <th>Created_at</th>
                    <th>updated_at</th>
                </tr>
            </thead>
            <tbody>

                {
                    compras.map( (compra) => {

                        return(
                            <tr key={compra.id} className="border border-stone-400">
                                <td>{compra.id}</td>
                                <td>{format(compra.data)}</td>
                                <td>{compra.endereco?.rua}</td>
                                <td>{compra.produto?.id}</td>
                                <td>{compra.created_at}</td>
                                <td>{compra.updated_at}</td>
                            </tr>
                        )

                    })
                }

            </tbody>

        </table>
    )

}