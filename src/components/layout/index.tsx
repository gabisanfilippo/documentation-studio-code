import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { IChildren } from "@/types/common";

export const Layout = ({ children }: IChildren) => {
  return (
    <>
      <Sidebar />
      <main className="flex flex-col gap-4 ml-main w-main-full bg-base-19 h-sidebar">
        {children}
      </main>
      <Footer />
    </>
  );
};
