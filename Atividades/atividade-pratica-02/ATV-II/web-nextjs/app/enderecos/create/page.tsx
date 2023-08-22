'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "@/app/components/forms/Input";

export default function CreateEstado() {
    
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('')

    const { push } = useRouter();
    
    async function handleSubmit(event : FormEvent) {
        
        event.preventDefault();

        const data = {
            rua,
            numero,
            bairro
        }

        const requestInit : RequestInit = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            
            const response = await fetch('http://localhost:5555/endereco', requestInit);

            if (response.ok) {
               const endereco = await response.json();
               const { id } = endereco;
               window.alert(`Endereco inserido com sucesso! Id: ${id}`);
               push('/enderecos');
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
                        htmlFor="Rua">Rua</label>
                    {/* <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        onChange={(event) => {setNome
                        (event.target.value)}} /> */}
                    <Input 
                        name="Rua" 
                        placeholder="Informe o nome da rua"
                        setValue={(event) => {setRua
                            (event.target.value)}}
                    />
            
                </div>
                <div>
                    <label 
                        htmlFor="numero">Numero</label>
                    <Input 
                        name="numero" 
                        placeholder="Informe o numero"
                        setValue={(event) => {
                            setNumero(event.target.value)
                        }} />
                </div>
                <div>
                    <label 
                        htmlFor="bairro">Bairro</label>
                    <Input 
                        name="bairro" 
                        placeholder="Informe o bairro"
                        setValue={(event) => {
                            setBairro(event.target.value)
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