import { AuthForm } from "@widgets/auth";
import { AccountActivateForm } from "@features/auth";
import activateImage from "@img/auth/verification.png";

export const AccountActivatePage: React.FC = () => {
  return (
    <AuthForm imageUrl={activateImage} title="Аккаунтты растау">
      <AccountActivateForm />
    </AuthForm>
  );
};
