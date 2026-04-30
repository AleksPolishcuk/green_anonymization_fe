import type { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import type { LinkProps } from "react-router-dom";

import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import { NavButton, NavIconBox } from "components/Header/NavLinks/styles";
import { headerI18nPrefix, headerNavItems } from "constants/MainPages";

type NavIcon = ComponentType<{ fontSize?: string }>;

const NAV_ICONS: Partial<Record<string, NavIcon>> = {
  solution: TipsAndUpdatesOutlinedIcon,
  contactUs: MailOutlineRoundedIcon,
};

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
  const LinkEl = LinkComponent;

  return (
    <>
      {headerNavItems.map((item) => {
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
