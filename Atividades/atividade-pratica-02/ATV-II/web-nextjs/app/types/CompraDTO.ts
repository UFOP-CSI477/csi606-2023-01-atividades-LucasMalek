import EnderecoDTO from "../types/EnderecoDTO"
import ProdutoDTO from "../types/ProdutosDTO"


interface CompraDTO {
    id?: number
    data: string
    endereco?: EnderecoDTO
    produto?: ProdutoDTO
    created_at?: string;
    updated_at?: string;
}

export default CompraDTO;