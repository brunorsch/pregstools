import { Tabela } from "./tabela";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col p-8 items-start justify-start">
      <h1 className="text-5xl">Lista de compras</h1>
      <Tabela />
    </main>
  );
}
