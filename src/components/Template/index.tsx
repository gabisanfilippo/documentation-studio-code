import { CloseIcon } from "@/assets/icons";
import { ReactNode } from "react";

interface ITemplate {
  children: ReactNode;
}

export const Template = ({ children }: ITemplate) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 h-9 bg-base-20 w-max text-white text-xs px-4 border-white border-t-2 border-solid">
        {/* TODO: add logo */}
        <p>Welcome</p>
        <CloseIcon />
      </div>
      <div className="bg-base-20 h-template">{children}</div>
    </div>
  );
};
