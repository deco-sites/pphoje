import Modals from "../components/header/Modals.tsx";
import NavBar from "../components/header/NavBar.tsx";

export interface Item {
  label: string;
  href: string;
}
export interface Props {
  sections: Item[];
}

function HeaderResponsive({ sections }: Props) {
  return (
    <header class="">
      <NavBar items={sections} />
      <Modals menu={{ items: sections }} />
    </header>
  );
}

export default HeaderResponsive;
