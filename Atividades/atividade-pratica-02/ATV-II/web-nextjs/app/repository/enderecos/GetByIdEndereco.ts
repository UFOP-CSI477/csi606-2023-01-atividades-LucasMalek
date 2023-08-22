const getByIdendereco = async (id : string) => {

    

    const endereco = await 
        fetch(
            `http://localhost:5555/endereco/${id}`, 
            { cache: 'no-store' }
        );
    return endereco.json();;

}

export default getByIdendereco