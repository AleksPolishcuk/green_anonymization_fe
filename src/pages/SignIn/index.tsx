import {
  LeftContent,
  LeftSection,
  Page,
  RightContent,
  RightSection,
} from "./styles";
import SignInHero from "components/Auth/SignInHero";
import SignInForm from "components/Auth/SignInForm";

export default function SignIn() {
  return (
    <Page>
      <LeftSection>
        <LeftContent>
          <SignInHero />
        </LeftContent>
      </LeftSection>
      <RightSection>
        <RightContent>
          <SignInForm />
        </RightContent>
      </RightSection>
    </Page>
  );
}
