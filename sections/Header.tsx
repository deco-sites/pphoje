import HeaderResponsive from "../islands/HeaderResponsive.tsx"

export interface Item {
    label: string;
    href: string;
}
export interface Props {
    sections: Item[];
}

function Header({sections}: Props) {
  return (
    <HeaderResponsive sections={sections}/>
  )
}

export default Header