import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};

type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export const sidebarItemsGenerator = (items: TUserPath[]) => {
  const sideBarItems = items.reduce((acc: TSidebarItems[], item) => {
    if (item.name && item.element) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: (
            <NavLink to={`/dashboard/${child.path}`}>{child.name}</NavLink>
          ),
        })),
      });
    }
    return acc;
  }, []);
  return sideBarItems;
};
