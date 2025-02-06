import Image from "next/image";
import Link from "next/link";
import path from "path";
import { Tabela } from "./tabela";

const features = [
  {
    nome: "Lista de Compras",
    path: "lista-compras",
  },
  {
    nome: "Inventário da casa",
    path: "inventario",
  },
  {
    nome: "Diretório de Pix",
    path: "diretorio-pix",
  },
];

export default function Home() {
  function BotoesNavegacao(props: {
    features: { nome: string; path: string }[];
  }) {
    return (
      <div className="flex gap-4">
        {props.features.map((feature) => (
          <Link key={feature.path} href={"/" + feature.path} className="btn">
            {feature.nome}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <main className="w-full h-screen flex flex-col p-8 items-start justify-start">
      <h1 className="text-5xl">Lista de compras</h1>
      <Tabela />
    </main>
  );
}
