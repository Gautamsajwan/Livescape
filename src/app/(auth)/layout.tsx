import { ReactNode } from "react";
import { LogoTitle } from "./_components/logo";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen flex flex-col justify-center items-center space-y-6">
      <LogoTitle />
      {children}
    </main>
  );
};

export default AuthLayout;
