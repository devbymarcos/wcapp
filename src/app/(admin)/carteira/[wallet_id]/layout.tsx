import BtnLinkSubMenu from "@/components/btn/BtnLinkSubMenu";
import CreateIcon from "@/components/icons/CreateIcon";
import DashIcon from "@/components/icons/DashIcon";
import ListIcon from "@/components/icons/ListIcon";
import TransfIcon from "@/components/icons/TransfIcon";
import CardStyle from "@/components/cards/CardStyle";
import { getWalletApi } from "@/http/api";
import { cookies } from "next/headers";
import WalletIcon from "@/components/icons/WalletIcons";
import CategoryFlowIcon from "@/components/icons/CategoryFLowIcon";

type PropslayoutWallet = {
  params: {
    wallet_id: string;
  };
  children: React.ReactNode;
};

async function getWallet() {
  const token: string | undefined = cookies().get("token")?.value;
  const { url, options } = getWalletApi(token);
  const response = await fetch(url, options);
  return response.json();
}

const layoutWallet = async ({ children, params }: PropslayoutWallet) => {
  const wallets = await getWallet();
  let walletActivate: string = "";
  wallets.data.forEach((wallet: any) => {
    if (wallet.id == params.wallet_id) {
      walletActivate = wallet.name;
    }
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:gap-12 items-center mb-5">
        <nav className="mb-5">
          <ul className="flex gap-4">
            <li>
              <BtnLinkSubMenu title="Lista de carteiras" href={`/`}>
                <WalletIcon />
                {/* <p className="hidden md:block">Carteiras</p> */}
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Painel"
                href={`/carteira/${params.wallet_id}`}
              >
                <DashIcon />
                {/* <p className="hidden md:block">Painel</p> */}
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Adicionar transação"
                href={`/carteira/${params.wallet_id}/transacoes/nova`}
              >
                <CreateIcon />
                {/* <p className="hidden md:block">Adicionar</p> */}
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Listar Transações"
                href={`/carteira/${params.wallet_id}/transacoes/list`}
              >
                <ListIcon />
                {/* <p className="hidden md:block">Transações</p> */}
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Tranferencia"
                href={`/carteira/${params.wallet_id}/transacoes/transferencia`}
              >
                <TransfIcon />
                {/* <p className="hidden md:block">Transferir</p> */}
              </BtnLinkSubMenu>
            </li>
            <li>
              <BtnLinkSubMenu
                title="Gerar Fluxo"
                href={`/carteira/${params.wallet_id}/cf`}
              >
                <CategoryFlowIcon />
                {/* <p className="hidden md:block">Fluxo categoria</p> */}
              </BtnLinkSubMenu>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mb-3">
        <CardStyle>
          <div className="flex gap-4 items-center">
            <div>
              <h3 className="text-sm text-base-secondary uppercase font-bold">
                Carteira Selecionada
              </h3>
              <p className="text-xl text-base-black dark:text-base-white font-bold">
                {walletActivate}
              </p>
            </div>
          </div>
        </CardStyle>
      </div>
      {children}
    </>
  );
};

export default layoutWallet;
