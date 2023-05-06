import Modal from "deco-sites/pphoje/components/ui/Modal.tsx";
import { lazy, Suspense } from "preact/compat";
import { useUI } from "deco-sites/pphoje/sdk/useUI.ts";

import type { Props as MenuProps } from "deco-sites/pphoje/components/header/Menu.tsx";
import Loading from "deco-sites/pphoje/components/ui/Loading.tsx";

const Menu = lazy(() => import("deco-sites/pphoje/components/header/Menu.tsx"));

interface Props {
  menu: MenuProps;
}

function Modals({ menu }: Props) {
  const { displayMenu } = useUI();

  return (
    <>
      <Modal
        title="Menu"
        mode="sidebar-left"
        loading="lazy"
        open={displayMenu.value}
        onClose={() => {
          displayMenu.value = false;
        }}
      >
        <Suspense fallback={<Loading />}>
          <Menu {...menu} />
        </Suspense>
      </Modal>
    </>
  );
}

export default Modals;
