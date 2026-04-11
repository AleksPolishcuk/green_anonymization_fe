import { useEmailLoginForm } from "features/Auth/hooks/useEmailLoginForm";
import { LeftContent, LeftSection, Page, RightContent, RightSection } from "./styles";
import SignInHero from "features/Auth/components/SignInHero";
import SignInForm from "features/Auth/components/SignInForm";

export default function SignIn() {
    const form = useEmailLoginForm();
  
    return (
      <Page>
        <LeftSection>
            <LeftContent>
          <SignInHero/>
          </LeftContent>
        </LeftSection>
        <RightSection>
          <RightContent>
            <SignInForm form={form}/>
          </RightContent>
        </RightSection>
      </Page>
    );
  }