import Icon from "deco-sites/pphoje/components/ui/Icon.tsx";
import Button from "deco-sites/pphoje/components/ui/Button.tsx";
import { useUI } from "deco-sites/pphoje/sdk/useUI.ts";

function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      class="btn-square btn-ghost"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon id="Bars3" width={20} height={20} strokeWidth={0.01} />
    </Button>
  );
}

function HeaderButton({ variant }: { variant: "cart" | "search" | "menu" }) {
  if (variant === "menu") {
    return <MenuButton />;
  }

  return null;
}

export default HeaderButton;
