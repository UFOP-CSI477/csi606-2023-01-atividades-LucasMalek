const getByIdcompra = async (id : string) => {

    

    const cidade = await 
        fetch(
            `http://localhost:5555/compras/${id}`, 
            { cache: 'no-store' }
        );
    return cidade.json();;

}

export default getByIdcompra