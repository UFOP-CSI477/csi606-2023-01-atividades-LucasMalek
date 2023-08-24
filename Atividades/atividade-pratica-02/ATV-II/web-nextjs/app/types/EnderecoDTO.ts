

interface EnderecoDTO {
    id?:          number
    rua:         String
    numero:      String
    complemento?: String
    bairro:      String
    telefone?:    String
    cidade_id:    number
    created_at?: string;
    updated_at?: string;
}

export default EnderecoDTO;