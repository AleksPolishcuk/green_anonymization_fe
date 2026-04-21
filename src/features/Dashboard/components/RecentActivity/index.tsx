import { useTranslation } from "react-i18next";

import { headerRoutes } from "constants/header";
import type { RecentActivityItem } from "features/Dashboard/types";
import { useCtaNavigate } from "shared/hooks/useCtaNavigate";

import { ChartCard, ChartSubtitle, ChartTitle } from "../ChartCard/styles";
import {
  ActivityList,
  ActivityRow,
  FileInfo,
  FileMeta,
  FileName,
  IconDot,
  NewDeIdButton,
} from "./styles";

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6M5 8h14M5 8a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2M5 8V6a2 2 0 012-2h6l4 4"
    />
  </svg>
);

type Props = {
  data: RecentActivityItem[];
};

export const RecentActivity = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");
  const goSignIn = useCtaNavigate({ target: headerRoutes.signIn });

  return (
    <ChartCard>
      <ChartTitle>{t("charts.recentActivity.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.recentActivity.subtitle")}</ChartSubtitle>

      <ActivityList>
        {data.map((item) => (
          <ActivityRow key={item.id}>
            <IconDot $iconColor={item.iconColor}>
              <FileIcon />
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

      <NewDeIdButton type="button" onClick={goSignIn}>
        {t("charts.recentActivity.newDeId")}
      </NewDeIdButton>
    </ChartCard>
  );
};
