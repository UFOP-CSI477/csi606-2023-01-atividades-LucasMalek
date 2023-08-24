"use client";

import Input from "@/app/components/forms/Input";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EnderecoDTO from "../../../types/EnderecoDTO";
import getByIdendereco from '../../../repository/enderecos/GetByIdEndereco'

interface DeleteCidadeParamsInterface {
    params : {
        id : string
    }
}

export default function DeleteCidade({ params } : DeleteCidadeParamsInterface) {

    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("")
    const [bairro, setBairro] = useState("")  
    const { push } = useRouter();
    
    useEffect(() => {
      getByIdendereco( params.id )
        .then(data => {
            setRua(data.rua);
            setNumero(data.numero)
            setBairro(data.bairro)
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
          `http://localhost:5555/endereco`,
          requestInit
        );
  
        if (response.ok) {
          const endereco = await response.json();
          const { id } = endereco;
          window.alert(`Endereço excluído com sucesso! Id: ${id}`);
          push("/enderecos");
        }
      } catch (error) {
        window.alert("Erro na exclusão do Enderço!");
        console.error(error);
      }
    };
  
    return (
      <main className="container m-auto"> 
        <h1>Exclusão do endereço: {params.id} :{rua}, {numero}, {bairro} </h1>
  
        <form onSubmit={handleSubmit}>
         
          <div>
            <button type="submit">Excluir</button>
            
          </div>
        </form>
      </main>
    );
}