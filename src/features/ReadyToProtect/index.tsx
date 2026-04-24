import { useTranslation } from "react-i18next";

import { readyToProtectActionKeys } from "shared/constants/readyToProtect";

import {
  Actions,
  Description,
  PrimaryButton,
  ReadyToProtectContainer,
  SecondaryButton,
  Section,
  Title,
  Wrapper,
} from "./styles";
import { useReadyToProtect } from "./hooks/useReadyToProtect";

const ReadyToProtect = () => {
  const { t } = useTranslation();
  const { handleGetStartedClick, handleContactSalesClick } =
    useReadyToProtect();

  return (
    <Section>
      <ReadyToProtectContainer>
        <Wrapper>
          <Title variant="h3">{t("readyToProtect.title")}</Title>

          <Description variant="body1">
            {t("readyToProtect.description")}
          </Description>

          <Actions>
            <PrimaryButton
              variant="contained"
              disableElevation
              onClick={handleGetStartedClick}
            >
              {t(readyToProtectActionKeys.primary)}
            </PrimaryButton>

            <SecondaryButton
              variant="outlined"
              onClick={handleContactSalesClick}
            >
              {t(readyToProtectActionKeys.secondary)}
            </SecondaryButton>
          </Actions>
        </Wrapper>
      </ReadyToProtectContainer>
    </Section>
  );
};

export default ReadyToProtect;
