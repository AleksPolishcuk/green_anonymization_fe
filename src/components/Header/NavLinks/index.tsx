import type { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import type { LinkProps } from "react-router-dom";

import { NavButton } from "components/Header/NavLinks/styles";
import { headerI18nPrefix, headerNavItems } from "constants/header";

type NavLinksProps = {
  onNavigate?: () => void;
  LinkComponent?: ComponentType<LinkProps>;
};

export function NavLinks({
  onNavigate,
  LinkComponent = NavButton,
}: NavLinksProps) {
  const { t } = useTranslation();
  const LinkEl = LinkComponent;

  return (
    <>
      {headerNavItems.map((item) => (
        <LinkEl key={item.key} to={item.to} onClick={onNavigate}>
          {t(`${headerI18nPrefix}.nav.${item.key}`)}
        </LinkEl>
      ))}
    </>
  );
}
