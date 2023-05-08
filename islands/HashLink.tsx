import { useUI } from "../sdk/useUI.ts";
interface Props {
  href: string;
  label: string;
}

export default function HashLink({ href, label }: Props) {
  const { displayMenu } = useUI();
  return (
    <a
      class="group-hover:underline"
      href={href}
      onClick={() => {
        displayMenu.value = false;
      }}
    >
      {label}
    </a>
  );
}
