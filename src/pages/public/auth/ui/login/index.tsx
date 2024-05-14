import { AuthForm } from "@widgets/auth";
import { LoginForm } from "@features/auth";
import loginImage from "@img/auth/login.png";

export const LoginPage: React.FC = () => {
  return (
    <AuthForm imageUrl={loginImage} title="Кіру">
      <LoginForm />
    </AuthForm>
  );
};
