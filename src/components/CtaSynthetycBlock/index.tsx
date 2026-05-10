import { SpriteIconSvg } from "components/DeidOutput/analysisStyles";
import {
  SyntheticDataButton,
  SyntheticDataCta,
  SyntheticDataCtaLeft,
  SyntheticDataCtaText,
  SyntheticDataCtaTitle,
  SyntheticDataIconBox,
} from "./styles";
import { headerSpriteRef } from "constants/MainPages";
import { useTranslation } from "react-i18next";
import { useDeidOutput } from "components/DeidOutput/hooks/useDeidOutput";

export default function CtaSynthetycBlock() {
  const { t } = useTranslation("translation", { keyPrefix: "deidOutput" });
  const { handleGenerateSyntheticData } = useDeidOutput();

  return (
    <SyntheticDataCta>
      <SyntheticDataCtaLeft>
        <SyntheticDataIconBox>
          <SpriteIconSvg aria-hidden="true">
            <use href={headerSpriteRef("icon-database")} />
          </SpriteIconSvg>
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
      </SyntheticDataButton>
    </SyntheticDataCta>
  );
}
