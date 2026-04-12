import { useAuthGuard } from "shared/hooks/useAuthGuard";
import { useRegisterForm } from "features/Auth/hooks/useRegisterForm";
import {
  Page,
  LeftSection,
  RightSection,
  LeftContent,
  RightContent,
} from "./styles";
import RegisterForm from "features/Auth/components/RegisterForm";
import RegisterHero from "features/Auth/components/RegisterHero";

export default function Register() {
  useAuthGuard("unregistered");

  const form = useRegisterForm();

  return (
    <Page>
      <LeftSection>
        <LeftContent>
          <RegisterForm form={form} />
        </LeftContent>
      </LeftSection>

      <RightSection>
        <RightContent>
          <RegisterHero />
        </RightContent>
      </RightSection>
    </Page>
  );
}
