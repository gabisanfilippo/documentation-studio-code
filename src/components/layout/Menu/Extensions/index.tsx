import { DotsMenuIcon, RefreshIcon } from "@/assets/icons";

export const ExtensionsMenu = () => {
  return (
    <section className="w-300px bg-base-19 flex flex-col gap-2 text-base-06 px-2 ">
      <div className="px-2 py-4 text-xs flex justify-between items-center">
        <p>SEARCH</p>
        <div className="flex items-center gap-2">
          <RefreshIcon />
          <DotsMenuIcon />
        </div>
      </div>
    </section>
  );
};
