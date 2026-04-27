import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { ACTIVITY_SUCCESS_SPRITE_ID } from "constants/DashboardPage";
import { headerSpriteRef } from "constants/header";
import type { RecentActivityItem } from "components/Dashboard/types";

import {
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "components/Dashboard/charts/ChartCard/styles";
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

type Props = {
  data: RecentActivityItem[];
};

export const RecentActivity = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");
  const listRef = useRef<HTMLDivElement>(null);
  const [canScrollMore, setCanScrollMore] = useState(false);

  const checkScroll = () => {
    const el = listRef.current;
    if (!el) return;
    setCanScrollMore(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  };

  useEffect(() => {
    checkScroll();
  }, [data]);

  return (
    <ChartCard $tall>
      <ChartTitle>{t("charts.recentActivity.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.recentActivity.subtitle")}</ChartSubtitle>

      <ScrollWrapper>
        <ActivityList ref={listRef} onScroll={checkScroll}>
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
                  {t("charts.recentActivity.entities", {
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
    </ChartCard>
  );
};
