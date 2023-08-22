'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "@/app/components/forms/Input";

export default function CreateProduto() {
    
    const [valor_unitario, setvalor_unitario] = useState('');
    const [descricao, setdescricao] = useState('');
    

    const { push } = useRouter();
    
    async function handleSubmit(event : FormEvent) {
        
        event.preventDefault();

        const data = {
            valor_unitario,
            descricao,
            
        }

        const requestInit : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5555/produtos', requestInit);

            if (response.ok) {
               const produto = await response.json();
               const { id } = produto;
               window.alert(`Endereco inserido com sucesso! Id: ${id}`);
               push('/produtos');
            }

        } catch (error) {
            window.alert('Erro na inclusão do Endereço!');
            console.error(error);
        }

    }

    return(
    
        <main className="container m-auto">

            <form onSubmit={handleSubmit} action="/teste">

                <div>
                    <label 
                        htmlFor="valor_unitario">valor_unitario</label>
                    {/* <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        onChange={(event) => {setNome
                        (event.target.value)}} /> */}
                    <Input 
                        name="valor_unitario" 
                        placeholder="Informe o nome da valor_unitario"
                        setValue={(event) => {setvalor_unitario
                            (event.target.value)}}
                    />
            
                </div>
                <div>
                    <label 
                        htmlFor="descricao">descricao</label>
                    <Input 
                        name="descricao" 
                        placeholder="Informe o descricao"
                        setValue={(event) => {
                            setdescricao(event.target.value)
                        }} />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar</button>
                    <button type="button">Voltar</button>
                </div>
            </form>

        </main>

    );

}