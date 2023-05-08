import Icon from "deco-sites/pphoje/components/ui/Icon.tsx";
import HashLink from "../../islands/HashLink.tsx";

import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="px-4 flex-grow flex flex-col divide-y divide-base-200">
        {items.map((item) => (
          <li class="py-4 group">
            <HashLink href={item.href} label={item.label} />
          </li>
        ))}
      </ul>

      <ul class="flex flex-col py-2 bg-base-200">
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="https://www.deco.cx"
          >
            <Icon id="Phone" width={20} height={20} strokeWidth={2} />
            <span class="text-sm">Código aberto no Github</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
