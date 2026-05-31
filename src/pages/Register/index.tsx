import { useAuthGuard } from "shared/hooks/useAuthGuard";
import {
  Page,
  LeftSection,
  RightSection,
  LeftContent,
  RightContent,
} from "./styles";
import RegisterForm from "components/Auth/RegisterForm";
import RegisterHero from "components/Auth/RegisterHero";
import { Loader } from "shared/ui/Loader";

export default function Register() {
  const { loading } = useAuthGuard("unregistered");
  if (loading) return <Loader />;
  return (
    <Page>
      <LeftSection>
        <LeftContent>
          <RegisterForm />
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
