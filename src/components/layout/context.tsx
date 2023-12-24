import { IChildren } from "@/types/common";
import { ILayoutContext, NameIconType } from "@/types/layout";
import { createContext, useState } from "react";

const defaultValues: ILayoutContext = {
  iconSelected: "files",
  setIconSelected: () => {},
};

export const LayoutContext = createContext<ILayoutContext>(defaultValues);

export const LayoutContextProvider = ({ children }: IChildren) => {
  const [iconSelected, setIconSelected] = useState<NameIconType>("files");

  return (
    <LayoutContext.Provider value={{ iconSelected, setIconSelected }}>
      {children}
    </LayoutContext.Provider>
  );
};
