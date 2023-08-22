import Link from "next/link";
import CompraTable from "../components/ComprasTable";

export default function Compra() {
  return (
    <main className="container m-auto">
      <h1>Lista de Compras</h1>

      <Link href="/">Home</Link>
      <Link href="/compra/create">Cadastrar</Link>

      <CompraTable/>
    </main>
  );
}
