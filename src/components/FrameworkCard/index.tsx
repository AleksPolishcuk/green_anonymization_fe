import { useTranslation } from "react-i18next";
import type { ComplianceFramework } from "services/compliance/typing/compliance";

import {
  CardRoot,
  CardStack,
  CardHeader,
  FrameworkChip,
  SecondaryText,
  FrameworkCardItem,
} from "./styles";
import { frameworkToneMap } from "constants/DeidPage";

type Props = {
  framework: ComplianceFramework;
  selected: boolean;
  onClick: () => void;
};

export default function FrameworkCard({ framework, selected, onClick }: Props) {
  const { t } = useTranslation();

  return (
    <FrameworkCardItem>
      <CardRoot elevation={0} $selected={selected} onClick={onClick}>
        <CardStack>
          <CardHeader>
            <FrameworkChip
              label={framework.name}
              size="small"
              $tone={
                frameworkToneMap[
                  framework.code as keyof typeof frameworkToneMap
                ] ?? "gray"
              }
            />

            <SecondaryText variant="body2">
              {framework.entityTypesCount} {t("frameworks.entityTypes")}
            </SecondaryText>
          </CardHeader>

          <SecondaryText variant="body2">{framework.description}</SecondaryText>
        </CardStack>
      </CardRoot>
    </FrameworkCardItem>
  );
}
