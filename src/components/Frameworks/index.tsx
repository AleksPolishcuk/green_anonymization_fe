import { useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import FrameworkCard from "components/FrameworkCard";
import { LimitReachedModal } from "components/LimitReachedModal";
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
import { headerSpriteRef, COMPLIANCE_FRAMEWORKS } from "constants/MainPages";
import { useFrameworkSelection } from "./useFrameworkSelection";
import { useDailyLimitGuard } from "shared/hooks/useDailyLimitGuard";

export default function FrameworkSection() {
  const { t } = useTranslation();
  const { selectedFramework, selectFramework } = useFrameworkSelection();
  const { isDailyLimitReached } = useDailyLimitGuard();
  const [limitModalOpen, setLimitModalOpen] = useState(false);

  const handleFrameworkClick = (
    framework: (typeof COMPLIANCE_FRAMEWORKS)[number],
  ) => {
    if (isDailyLimitReached) {
      setLimitModalOpen(true);
      return;
    }
    selectFramework(framework);
  };

  return (
    <>
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
            {COMPLIANCE_FRAMEWORKS.map((framework) => (
              <FrameworkSectionItem key={framework.code}>
                <FrameworkCard
                  framework={framework}
                  selected={selectedFramework?.code === framework.code}
                  onClick={() => handleFrameworkClick(framework)}
                />
              </FrameworkSectionItem>
            ))}
          </FrameworkSectionGrid>
        </FrameworkSectionStack>
      </FrameworkSectionRoot>

      <LimitReachedModal
        open={limitModalOpen}
        onClose={() => setLimitModalOpen(false)}
      />
    </>
  );
}
