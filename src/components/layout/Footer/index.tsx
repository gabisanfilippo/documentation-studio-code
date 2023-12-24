import {
  AlertIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  BranchIcon,
  ErrorIcon,
  NotificationIcon,
  PersonDialogBoxIcon,
  SynchronousIcon,
} from "@/assets/icons";
import { IChildren } from "@/types/common";
import { useRouter } from "next/router";

const TextContainer = ({ children }: IChildren) => {
  return <li className="px-4 flex items-center gap-1">{children}</li>;
};

export const Footer = () => {
  const { pathname } = useRouter();

  return (
    <footer className="fixed bottom-0 left-0 w-screen h-5 bg-blue-06 text-xs flex justify-between items-center text-base-01">
      <ul className="flex items-center">
        <TextContainer>
          <BranchIcon />
          <p>{pathname === "/" ? "main" : pathname}</p>
        </TextContainer>
        <TextContainer>
          <SynchronousIcon />
          <p className="ml-1">0</p>
          <ArrowDownIcon />
          <p>1</p>
          <ArrowUpIcon />
        </TextContainer>
        <TextContainer>
          <ErrorIcon />
          <p>0</p>
          <AlertIcon />
          <p>0</p>
        </TextContainer>
      </ul>
      <ul className="pr-4 flex items-center gap-8">
        <li>
          <p>Ln 17, Col 3</p>
        </li>
        <li>
          <p>Spaces: 2</p>
        </li>
        <li>
          <p>UTF-8</p>
        </li>
        <li>
          <p>LF</p>
        </li>
        <li>
          <p>TypeScript</p>
        </li>
        <li>
          {/* TODO: about me */}
          <PersonDialogBoxIcon />
        </li>
        <li>
          {/* TODO: notification */}
          <NotificationIcon />
        </li>
      </ul>
    </footer>
  );
};
