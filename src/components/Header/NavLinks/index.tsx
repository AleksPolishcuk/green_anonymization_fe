import type { ComponentType, ElementType } from "react";
import { useTranslation } from "react-i18next";
import type { LinkProps } from "react-router-dom";

import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import { NavButton, NavIconBox } from "components/Header/NavLinks/styles";
import {
  headerI18nPrefix,
  headerNavItems,
  headerRoutes,
} from "constants/MainPages";
import { useAppSelector } from "store/hooks";

const NAV_ICONS: Partial<Record<string, ElementType>> = {
  solution: TipsAndUpdatesOutlinedIcon as ElementType,
  contactUs: MailOutlineRoundedIcon as ElementType,
  dashboard: DashboardOutlinedIcon as ElementType,
};

const DASHBOARD_NAV_ITEM = {
  key: "dashboard",
  to: headerRoutes.dashboard,
} as const;

type NavLinksProps = {
  onNavigate?: () => void;
  LinkComponent?: ComponentType<LinkProps>;
  showIcons?: boolean;
};

export function NavLinks({
  onNavigate,
  LinkComponent = NavButton,
  showIcons = false,
}: NavLinksProps) {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.auth?.user);
  const registered = useAppSelector((state) => state.auth?.registered);
  const LinkEl = LinkComponent;

  const isAuthenticated = Boolean(user) && registered;
  const navItems = isAuthenticated
    ? [...headerNavItems, DASHBOARD_NAV_ITEM]
    : headerNavItems;

  return (
    <>
      {navItems.map((item) => {
        const Icon = NAV_ICONS[item.key];
        return (
          <LinkEl key={item.key} to={item.to} onClick={onNavigate}>
            {showIcons && Icon && (
              <NavIconBox>
                <Icon fontSize="small" />
              </NavIconBox>
            )}
            {t(`${headerI18nPrefix}.nav.${item.key}`)}
          </LinkEl>
        );
      })}
    </>
  );
}
