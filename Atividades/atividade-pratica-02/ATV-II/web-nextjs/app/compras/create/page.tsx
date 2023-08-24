'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "@/app/components/forms/Input";

export default function CreateEstado() {
    
    const [produto, setProduto] = useState('');
    const [endereco, setEndereco] =useState('')
    const { push } = useRouter();
    
    async function handleSubmit(event : FormEvent) {
        
        event.preventDefault();

        const dado = {
            endereco_id: parseInt(endereco),
            produto_id: parseInt(produto)
        }

        const requestInit : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(dado)
        }

        try {
            
            const response = await fetch('http://localhost:5555/compras', requestInit);

            if (response.ok) {
               const compra = await response.json();
               const { id } = compra;
               window.alert(`Compra inserida com sucesso! Id: ${id}`);
               push('/compras');
            }

        } catch (error) {
            window.alert('Erro na inclusão da compra!');
            console.error(error);
        }

    }

    return(
    
        <main className="container m-auto">

            <form onSubmit={handleSubmit} action="/teste">

                <div>
                    <label 
                        htmlFor="p_id">Id do produto</label>
                    {/* <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        onChange={(event) => {setNome
                        (event.target.value)}} /> */}
                    <Input 
                        name="p_id" 
                        placeholder="Informe o id do produto"
                        setValue={(event) => {setProduto
                            (event.target.value)}}
                    />
            
                </div>
                <div>
                    <label 
                        htmlFor="e_id">Endereco do produto</label>
                    {/* <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        onChange={(event) => {setNome
                        (event.target.value)}} /> */}
                    <Input 
                        name="e_id" 
                        placeholder="Informe o id do endereco do usuário"
                        setValue={(event) => {setEndereco
                            (event.target.value)}}
                    />
            
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