import type { ComponentType, HTMLAttributes } from "react";

import { headerI18nPrefix, headerNavItems } from "components/Header/constants";
import { NavButton } from "components/Header/styles";
import { useTranslation } from "react-i18next";

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
