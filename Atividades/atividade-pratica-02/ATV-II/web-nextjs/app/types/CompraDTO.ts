import EnderecoDTO from "../types/EnderecoDTO"
import ProdutoDTO from "../types/ProdutosDTO"


interface CompraDTO {
    id?: number
    data: string
    endereco_id: number
    produto_id: number
    created_at?: string;
    updated_at?: string;
}

export default CompraDTO;