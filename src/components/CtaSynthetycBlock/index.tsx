import {
  SyntheticDataButton,
  SyntheticDataCta,
  SyntheticDataCtaLeft,
  SyntheticDataCtaText,
  SyntheticDataCtaTitle,
  SyntheticDataIconBox,
} from "./styles";
import { useTranslation } from "react-i18next";
import { useDeidOutput } from "components/DeidOutput/hooks/useDeidOutput";
import { ArrowRight, AutoAwesomeOutlined } from "@mui/icons-material";

export default function CtaSynthetycBlock() {
  const { t } = useTranslation();
  const { handleGenerateSyntheticData } = useDeidOutput();

  return (
    <SyntheticDataCta>
      <SyntheticDataCtaLeft>
        <SyntheticDataIconBox>
          <AutoAwesomeOutlined />
        </SyntheticDataIconBox>

        <div>
          <SyntheticDataCtaTitle>
            {t("syntheticDataCta.title")}
          </SyntheticDataCtaTitle>
          <SyntheticDataCtaText>
            {t("syntheticDataCta.description")}
          </SyntheticDataCtaText>
        </div>
      </SyntheticDataCtaLeft>

      <SyntheticDataButton onClick={handleGenerateSyntheticData}>
        {t("syntheticDataCta.button")}
        <ArrowRight />
      </SyntheticDataButton>
    </SyntheticDataCta>
  );
}
