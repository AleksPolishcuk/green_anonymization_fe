import { useTranslation } from "react-i18next";

import {
  headerI18nPrefix,
  headerLogoSpriteId,
  headerLogoViewBox,
  headerRoutes,
  headerSpriteRef,
} from "constants/header";
import {
  LogoIcon,
  LogoLink,
  NavItem,
  NavItemDisabled,
  NavStack,
  SidebarAside,
  SidebarFooter,
  UserEmail,
} from "./styles";
import { useAppSelector } from "store/hooks";

export const SidebarSlot = () => {
  const { t } = useTranslation();
  const { t: tDash } = useTranslation("dashboard");
  const userEmail = useAppSelector((state) => state.auth.user?.email);
  const vb = headerLogoViewBox;

  return (
    <SidebarAside>
      <LogoLink
        to={headerRoutes.home}
        aria-label={t(`${headerI18nPrefix}.logoAlt`)}
      >
        <LogoIcon
          viewBox={`0 0 ${vb.width} ${vb.height}`}
          preserveAspectRatio="none"
          aria-hidden
        >
          <use
            href={headerSpriteRef(headerLogoSpriteId)}
            width={vb.width}
            height={vb.height}
          />
        </LogoIcon>
      </LogoLink>

      <NavStack>
        <NavItem to="/dashboard" end>
          {tDash("sidebar.analytics")}
        </NavItem>
        <NavItemDisabled>{tDash("sidebar.settings")}</NavItemDisabled>
        <NavItemDisabled>{tDash("sidebar.help")}</NavItemDisabled>
      </NavStack>

      {userEmail ? (
        <SidebarFooter>
          <UserEmail title={userEmail}>{userEmail}</UserEmail>
        </SidebarFooter>
      ) : null}
    </SidebarAside>
  );
};
