import Link from "next/link";

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
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <main className="w-3/4 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-5xl">PregsTools</h1>
        <div className="flex flex-row items-center">
          <BotoesNavegacao features={features} />
        </div>
      </main>
    </div>
  );
}
