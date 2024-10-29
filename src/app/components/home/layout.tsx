import { ReactNode } from "react";
import SideBar from "./SideBar";



interface HtmlLayoutProps {
  children: ReactNode;
}
const HomeLayout = ({ children }: HtmlLayoutProps) => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#f9f9f9] flex gap-8">
      <div><SideBar /></div>
      <div>{children}</div>
    </div>
  );
};
export default HomeLayout;
