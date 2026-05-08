import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import FrameworkCard from "components/FrameworkCard";
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
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setSelectedFramework } from "store/slices/documentSlice";
import { useEffect } from "react";
import { complianceService } from "services/compliance";
import type {
  ComplianceFramework,
  ComplianceSelectionResponse,
} from "services/compliance/typing/compliance";

export default function FrameworkSection() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedFramework = useAppSelector((s) => s.document.selectedFramework);

  useEffect(() => {
    const fetchDefaultFramework = async () => {
      const currentComplianceResponse: ComplianceSelectionResponse =
        await complianceService.getSelection();
      if (currentComplianceResponse.framework) {
        const currentCompliance: ComplianceFramework =
          currentComplianceResponse?.framework;
        dispatch(setSelectedFramework(currentCompliance));
      }
    };
    fetchDefaultFramework();
  }, [dispatch]);

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
          {COMPLIANCE_FRAMEWORKS.map((framework) => (
            <FrameworkSectionItem key={framework.code}>
              <FrameworkCard
                framework={framework}
                selected={selectedFramework?.code === framework.code}
                onClick={() => {
                  dispatch(
                    setSelectedFramework(framework as ComplianceFramework),
                  );
                }}
              />
            </FrameworkSectionItem>
          ))}
        </FrameworkSectionGrid>
      </FrameworkSectionStack>
    </FrameworkSectionRoot>
  );
}
