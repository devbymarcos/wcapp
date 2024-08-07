"use client";
import Link from "next/link";
import DashIcon from "../icons/DashIcon";
import CategoryIcon from "../icons/CategoryIcon";
import WalletIcon from "../icons/WalletIcons";
import TransactionIcon from "../icons/TransactionIcon";
import LogoutIcon from "../icons/LogoutIcon";
import React from "react";
import { useStore } from "@/hooks/useStore";

interface MenuData {
  title: string;
  icon?: React.ReactElement;
  path: string;
}

const MenuSideBar = () => {
  const [dark, updateOpenSideBar, openSideBar] = useStore((state) => [
    state.dark,
    state.updateOpenSideBar,
    state.openSideBar,
  ]);

  function open() {
    updateOpenSideBar(!openSideBar);
  }
  const menuData: MenuData[] = [
    {
      title: "Carteiras",
      // icon: <DashIcon />,
      path: "/",
    },
    {
      title: "Adiciona Carteira",
      // icon: <WalletIcon colors="#fff" />,
      path: "/carteiras/list",
    },
    {
      title: "Cria Categoria",
      // icon: <CategoryIcon colors="#fff" />,
      path: "/categorias/list",
    },
    {
      title: "Perfil",
      // icon: <LogoutIcon />,
      path: "/perfil/editar",
    },
    {
      title: "Logout",
      // icon: <LogoutIcon />,
      path: "/logout",
    },
  ];
  return (
    <>
      <nav className="h-full  ">
        <ul className="flex items-center gap-11 h-full ">
          {menuData.map((item: MenuData) => {
            return (
              <li key={item.title} className=" py-2" onClick={open}>
                <Link
                  href={item.path}
                  className="flex gap-4  text-font-color-light dark:text-font-color-dark  font-bold  py-3 rounded-xl"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li className="pl-8 py-2"></li>
        </ul>
      </nav>
    </>
  );
};

export default MenuSideBar;
