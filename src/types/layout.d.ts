import { ReactNode } from "react";

interface ILayoutContext {
  iconSelected: NameIconType;
  setIconSelected: Dispatch<SetStateAction<NameIconType>>;
}

type NameIconType =
  | "files"
  | "search"
  | "branch"
  | "debug"
  | "extensions"
  | "profile"
  | "configurations";

interface IMenuInfo {
  icon: ReactNode;
  path: string;
  name: NameIconType;
}

type IMenuObject = {
  [key in NameIconType]: ReactNode;
};
