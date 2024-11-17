import { Header } from "../navbar/header";
import { LoadingBar } from "./loading";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoadingBar />
      <Header />
      <main>{children}</main>
    </>
  );
};
