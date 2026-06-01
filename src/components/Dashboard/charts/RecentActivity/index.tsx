import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ACTIVITY_SUCCESS_SPRITE_ID } from "constants/DashboardPage";
import { headerRoutes, headerSpriteRef } from "constants/MainPages";
import type {
  DashboardPeriod,
  RecentActivityItem,
} from "store/types/dashboard";

import { usePeriodSubtitle } from "../../hooks/usePeriodSubtitle";

import {
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "components/Dashboard/charts/ChartCard/styles";
import { ChartEmptyState } from "components/Dashboard/charts/ChartEmptyState";
import {
  ActivityList,
  ActivityRow,
  FileInfo,
  FileMeta,
  FileName,
  IconDot,
  ScrollIndicator,
  ScrollWrapper,
} from "components/Dashboard/charts/RecentActivity/styles";
import { useRecentActivityScroll } from "components/Dashboard/hooks/useRecentActivityScroll";

type Props = {
  data: RecentActivityItem[];
  period: DashboardPeriod;
};

export const RecentActivity = ({ data, period }: Props) => {
  const { t } = useTranslation();
  const subtitle = usePeriodSubtitle(period);
  const navigate = useNavigate();
  const { listRef, canScrollMore, handleScroll } = useRecentActivityScroll();

  const handleRowClick = (id: string) => {
    navigate(`${headerRoutes.syntheticData}?documentId=${id}`);
  };

  return (
    <ChartCard $tall>
      <ChartTitle>{t("dashboard.charts.recentActivity.title")}</ChartTitle>
      <ChartSubtitle>{subtitle}</ChartSubtitle>

      {data.length === 0 ? (
        <ChartEmptyState />
      ) : (
        <ScrollWrapper>
          <ActivityList ref={listRef} onScroll={handleScroll}>
            {data.map((item) => (
              <ActivityRow
                key={item.id}
                onClick={() => handleRowClick(item.id)}
              >
                <IconDot>
                  <svg viewBox="0 0 32 32" aria-hidden>
                    <use href={headerSpriteRef(ACTIVITY_SUCCESS_SPRITE_ID)} />
                  </svg>
                </IconDot>
                <FileInfo>
                  <FileName>{item.filename}</FileName>
                  <FileMeta>
                    {t("dashboard.charts.recentActivity.entities", {
                      count: item.entities,
                    })}{" "}
                    · {item.timeAgo}
                  </FileMeta>
                </FileInfo>
              </ActivityRow>
            ))}
          </ActivityList>

          <ScrollIndicator $visible={canScrollMore}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 7.5l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ScrollIndicator>
        </ScrollWrapper>
      )}
    </ChartCard>
  );
};
