import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { AuthActions } from "components/Header/components/AuthActions";
import { BurgerButton } from "components/Header/components/BurgerButton";
import { BurgerModal } from "components/Header/components/BurgerModal";
import { LiquidShell } from "components/Header/components/LiquidShell";
import { Logo } from "components/Header/components/Logo";
import { NavLinks } from "components/Header/components/NavLinks";
import { headerDesktopAuthBreakpointPx, headerI18nPrefix } from "components/Header/constants";
import { useHeaderMenu } from "components/Header/hooks/useHeaderMenu";
import {
  DesktopNav,
  DesktopNavCenter,
  HeaderFrame,
  HeaderLayout,
  HeaderShell,
  HeaderTrailing,
  LogoSlot,
} from "components/Header/styles";
import { useTranslation } from "react-i18next";

const mobileMenuId = "guest-mobile-menu";

export default function Header() {
  const { t } = useTranslation();
  const { isMenuOpen, openMenu, closeMenu } = useHeaderMenu();
  const showBurgerMenu = useMediaQuery(
    `(max-width: ${headerDesktopAuthBreakpointPx - 1}px)`,
  );

  useEffect(() => {
    if (!showBurgerMenu) {
      closeMenu();
    }
  }, [showBurgerMenu, closeMenu]);

  return (
    <HeaderShell>
      <HeaderLayout>
        <LiquidShell>
          <HeaderFrame>
            <LogoSlot>
              <Logo href="/" ariaLabel={t(`${headerI18nPrefix}.aria.homeLink`)} />
            </LogoSlot>

            <DesktopNavCenter>
              <DesktopNav aria-label={t(`${headerI18nPrefix}.aria.desktopNavigation`)}>
                <NavLinks />
              </DesktopNav>
            </DesktopNavCenter>

            <HeaderTrailing>
              {showBurgerMenu ? (
                <BurgerButton
                  onClick={openMenu}
                  expanded={isMenuOpen}
                  controls={mobileMenuId}
                  ariaLabel={t(`${headerI18nPrefix}.aria.openMenu`)}
                />
              ) : (
                <AuthActions />
              )}
            </HeaderTrailing>
          </HeaderFrame>
        </LiquidShell>
      </HeaderLayout>

      {showBurgerMenu ? <BurgerModal id={mobileMenuId} isOpen={isMenuOpen} onClose={closeMenu} /> : null}
    </HeaderShell>
  );
}
