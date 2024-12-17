import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" min-h-screen max-w-[1920px] mx-auto px-2 md:px-6  lg:px-24 ">
      {children}
    </div>
  );
};

export default Container;
