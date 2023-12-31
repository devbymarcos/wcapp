import Link from "next/link";
import React from "react";

const layoutCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1 className="text-base-black text-xl mb-4 font-bold dark:text-base-white">
        Categorias
      </h1>
      <nav className="mb-12">
        <ul className="flex gap-4">
          <li className="bg-base-yellow text-base-black py-2 px-4 rounded-md">
            <Link href="/categorias/nova">Criar Categoria</Link>
          </li>
          <li className="bg-base-yellow text-base-black py-2 px-4 rounded-md">
            <Link href="/categorias/list">Listar Categorias</Link>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
};

export default layoutCategory;
