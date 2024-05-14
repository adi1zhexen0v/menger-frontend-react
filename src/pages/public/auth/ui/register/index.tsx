import { AuthForm } from "@widgets/auth";
import { RegisterForm } from "@features/auth";
import registerImage from "@img/auth/register.png";

export const RegisterPage: React.FC = () => {
  return (
    <AuthForm imageUrl={registerImage} title="Тіркелу">
      <RegisterForm />
    </AuthForm>
  );
};
