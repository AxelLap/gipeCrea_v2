import { BasicSection } from "@/components/layout/BasicSection";
import { LoginForm } from "./loginForm";

export default function Login() {
  return (
    <main className="flex flex-1 justify-center    sm:items-start">
      <BasicSection title="Login">
        <p>Connectez vous à votre compte admin pour administrer le site</p>
        <LoginForm />
      </BasicSection>
    </main>
  );
}
