import { useTranslation } from "react-i18next";

import { ACTIVITY_SUCCESS_SPRITE_ID } from "constants/DashboardPage";
import { headerSpriteRef } from "constants/header";
import type { RecentActivityItem } from "components/Dashboard/types";

import {
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "components/Dashboard/components/ChartCard/styles";
import {
  ActivityList,
  ActivityRow,
  FileInfo,
  FileMeta,
  FileName,
  IconDot,
} from "components/Dashboard/components/RecentActivity/styles";

type Props = {
  data: RecentActivityItem[];
};

export const RecentActivity = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");

  return (
    <ChartCard $tall>
      <ChartTitle>{t("charts.recentActivity.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.recentActivity.subtitle")}</ChartSubtitle>

      <ActivityList>
        {data.map((item) => (
          <ActivityRow key={item.id}>
            <IconDot>
              <svg viewBox="0 0 32 32" aria-hidden>
                <use href={headerSpriteRef(ACTIVITY_SUCCESS_SPRITE_ID)} />
              </svg>
            </IconDot>
            <FileInfo>
              <FileName>{item.filename}</FileName>
              <FileMeta>
                {t("charts.recentActivity.entities", { count: item.entities })}{" "}
                · {item.timeAgo}
              </FileMeta>
            </FileInfo>
          </ActivityRow>
        ))}
      </ActivityList>
    </ChartCard>
  );
};
