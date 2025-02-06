"use client";
import { ItemCompra } from "../../types/ItemCompra";

const data: ItemCompra[] = [
  { id: "1", ordem: 1, nome: "Arroz 1kg", quantidade: 1 },
  { id: "2", ordem: 2, nome: "Feijão 1kg", quantidade: 1 },
  { id: "3", ordem: 3, nome: "Carne", quantidade: 1 },
  { id: "4", ordem: 4, nome: "Ovo", quantidade: 1 },
  { id: "5", ordem: 5, nome: "Óleo", quantidade: 1 },
];

export function Tabela() {
  function THead({ children }: { children: React.ReactNode }) {
    return (
      <th scope="col" className="group w-fit">
        {children}
      </th>
    );
  }

  return (
    <table className="table min-w-full">
      <thead>
        <tr>
          <THead>Ordem</THead>
          <THead>Nome</THead>
          <THead>Quantidade</THead>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.ordem}</td>
            <td>{item.nome}</td>
            <td>{item.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
