import Link from "next/link";
import ProdutoTable from "../components/ProdutosTable";

export default function Produto() {
  return (
    <main className="container m-auto">
      <h1>Lista de Produtos</h1>

      <Link href="/">Home</Link>
      <Link href="/produtos/create">Cadastrar</Link>

      <ProdutoTable />
    </main>
  );
}

