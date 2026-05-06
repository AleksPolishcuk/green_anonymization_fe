import { useTranslation } from "react-i18next";

import {
  CardRoot,
  CardStack,
  CardHeader,
  FrameworkChip,
  SecondaryText,
} from "./styles";
import { frameworkToneMap, COMPLIANCE_FRAMEWORKS } from "constants/MainPages";

type Props = {
  framework: (typeof COMPLIANCE_FRAMEWORKS)[number];
  selected: boolean;
  onClick: () => void;
};

export default function FrameworkCard({ framework, selected, onClick }: Props) {
  const { t } = useTranslation();

  return (
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
  );
}
