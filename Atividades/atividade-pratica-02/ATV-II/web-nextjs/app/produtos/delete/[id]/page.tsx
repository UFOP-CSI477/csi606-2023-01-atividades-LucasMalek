"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getByIdproduto from "../../../repository/produtos/GetByIdProduto"

interface DeleteCidadeParamsInterface {
    params : {
        id : string
    }
}

export default function DeleteCidade({ params } : DeleteCidadeParamsInterface) {

    const [valor_unitario, setvalor_unitario] = useState("");
    const [numero, setNumero] = useState("")
    const { push } = useRouter();
    
    useEffect(() => {
      

      getByIdproduto( params.id )
        .then(data => {
            setvalor_unitario(data.valor_unitario);
            setNumero(data.numero)
        })
      
    },[params])
  
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
  
      const data = {
        id : parseInt(params.id),
      };
  
      const requestInit: RequestInit = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      try {
        const response = await fetch(
          "http://localhost:5555/produtos",
          requestInit
        );
  
        if (response.ok) {
          const produto = await response.json();
          const { id } = produto;
          window.alert(`Produto excluído com sucesso! Id: ${id}`);
          push("/produtos");
        }
      } catch (error) {
        window.alert("Erro na exclusão do produto!");
        console.error(error);
      }
    };
  
    return (
      <main className="container m-auto">
        <h1>Exclusão do produto: {params.id}</h1>
  
        <form onSubmit={handleSubmit}>
         
          <div>
            <button type="submit">Excluir</button>
            
          </div>
        </form>
      </main>
    );
}