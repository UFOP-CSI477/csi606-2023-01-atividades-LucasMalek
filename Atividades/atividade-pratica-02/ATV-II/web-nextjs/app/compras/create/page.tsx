'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "@/app/components/forms/Input";

export default function CreateEstado() {
    
    const [data, setData] = useState('');

    const { push } = useRouter();
    
    async function handleSubmit(event : FormEvent) {
        
        event.preventDefault();

        const dado = {
            data
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
                        htmlFor="Data">Data</label>
                    {/* <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        onChange={(event) => {setNome
                        (event.target.value)}} /> */}
                    <Input 
                        name="Data" 
                        placeholder="Informe a data da compra"
                        setValue={(event) => {setData
                            (event.target.value)}}
                    />
            
                </div>
            </form>

        </main>

    );

}