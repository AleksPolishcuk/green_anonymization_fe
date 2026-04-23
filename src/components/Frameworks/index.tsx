import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import FrameworkCard from "components/FrameworkCard";
import { useComplianceFramework } from "./hooks/useComplianceFramework";
import {
  FrameworkSectionGrid,
  FrameworkSectionHeaderRow,
  FrameworkSectionIconBox,
  FrameworkSectionItem,
  FrameworkSectionRoot,
  FrameworkSectionStack,
  FrameworkSectionSubtitle,
  FrameworkSectionTitleRow,
  FrameworksLogoIcon,
  StepChip,
} from "./styles";
import { headerSpriteRef } from "constants/header";
import { Loader } from "shared/ui/Loader";

export default function FrameworkSection() {
  const { t } = useTranslation();

  const { frameworks, selectedCode, loading, handleSelect } =
    useComplianceFramework();

  if (loading) {
    return (
      <FrameworkSectionRoot>
        <Loader />
      </FrameworkSectionRoot>
    );
  }

  return (
    <FrameworkSectionRoot>
      <FrameworkSectionStack>
        <FrameworkSectionHeaderRow>
          <FrameworkSectionIconBox aria-hidden="true">
            <FrameworksLogoIcon>
              <use href={headerSpriteRef("icon-logo")} />
            </FrameworksLogoIcon>
          </FrameworkSectionIconBox>

          <div>
            <FrameworkSectionTitleRow>
              <Typography variant="h5">{t("frameworks.title")}</Typography>

              <StepChip label={t("frameworks.step")} size="small" />
            </FrameworkSectionTitleRow>

            <FrameworkSectionSubtitle variant="body2">
              {t("frameworks.subtitle")}
            </FrameworkSectionSubtitle>
          </div>
        </FrameworkSectionHeaderRow>

        <FrameworkSectionGrid>
          {frameworks.map((framework) => (
            <FrameworkSectionItem key={framework.code}>
              <FrameworkCard
                framework={framework}
                selected={selectedCode === framework.code}
                onClick={() => {
                  void handleSelect(framework.code);
                }}
              />
            </FrameworkSectionItem>
          ))}
        </FrameworkSectionGrid>
      </FrameworkSectionStack>
    </FrameworkSectionRoot>
  );
}
