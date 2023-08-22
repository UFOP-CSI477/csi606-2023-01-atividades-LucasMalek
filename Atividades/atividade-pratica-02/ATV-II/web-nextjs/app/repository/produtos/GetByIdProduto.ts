const getByIdproduto = async (id : string) => {

    

    const cidade = await 
        fetch(
            `http://localhost:5555/produtoss/${id}`, 
            { cache: 'no-store' }
        );
    return cidade.json();;

}

export default getByIdproduto