import type { ComponentType, HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

import { NavButton } from "components/Header/NavLinks/styles";
import { headerI18nPrefix, headerNavItems } from "constants/header";

type NavLinksProps = {
  onNavigate?: () => void;
  LinkComponent?: ComponentType<
    HTMLAttributes<HTMLAnchorElement> & { href: string }
  >;
};

export function NavLinks({
  onNavigate,
  LinkComponent = NavButton,
}: NavLinksProps) {
  const { t } = useTranslation();
  const Link = LinkComponent;

  return (
    <>
      {headerNavItems.map((item) => (
        <Link key={item.key} href={item.href} onClick={onNavigate}>
          {t(`${headerI18nPrefix}.nav.${item.key}`)}
        </Link>
      ))}
    </>
  );
}
