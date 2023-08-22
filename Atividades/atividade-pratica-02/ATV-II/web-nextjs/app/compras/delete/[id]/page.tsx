"use client";

import Input from "@/app/components/forms/Input";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getByIdcompra from '../../../repository/compras/GetByIdCompras'

interface DeleteCidadeParamsInterface {
    params : {
        id : string
    }
}

export default function DeleteCidade({ params } : DeleteCidadeParamsInterface) {

    const [data, setData] = useState("");
    const { push } = useRouter();
    
    useEffect(() => {
      

      getByIdcompra( params.id )
        .then(data => {
            setData(data.data);
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
          "http://localhost:5555/compras",
          requestInit
        );
  
        if (response.ok) {
          const compra = await response.json();
          const { id } = compra;
          window.alert(`Compra excluída com sucesso! Id: ${id}`);
          push("/compras");
        }
      } catch (error) {
        window.alert("Erro na exclusão da compra!");
        console.error(error);
      }
    };
  
    return (
      <main className="container m-auto">
        <h1>Exclusão da compra: {params.id}</h1>
  
        <form onSubmit={handleSubmit}>
         
          <div>
            <button type="submit">Excluir</button>
            
          </div>
        </form>
      </main>
    );
}