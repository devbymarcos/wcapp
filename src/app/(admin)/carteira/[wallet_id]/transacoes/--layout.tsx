import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import CreateIcon from "@/components/icons/CreateIcon";
import ListIcon from "@/components/icons/ListIcon";
import TransfIcon from "@/components/icons/TransfIcon";
import React from "react";

const layoutCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h1 className="text-base-black text-xl mb-4 font-bold dark:text-base-white">
        Transações
      </h1>
      <nav className="mb-12">
        <ul className="flex gap-4">
          <li>
            <BtnLinkSubMenu href="/transacoes/list">
              <ListIcon />
            </BtnLinkSubMenu>
          </li>
          <li>
            <BtnLinkSubMenu href="/transacoes/nova">
              <CreateIcon />
            </BtnLinkSubMenu>
          </li>
          <li>
            <BtnLinkSubMenu href="/transacoes/nova">
              <TransfIcon />
            </BtnLinkSubMenu>
          </li>
        </ul>
      </nav>
      {children}
    </section>
  );
};

export default layoutCategory;
