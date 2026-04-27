import { useTranslation } from "react-i18next";
import { AuthActions } from "components/Header/AuthActions";
import { BurgerModal } from "components/Header/BurgerModal";
import { useHeader } from "components/Header/hooks/useHeader";
import { NavLinks } from "components/Header/NavLinks";
import {
  BurgerIcon,
  DesktopNav,
  DesktopNavCenter,
  HeaderBar,
  HeaderFrame,
  HeaderLayout,
  HeaderShell,
  HeaderTrailing,
  LogoIcon,
  LogoLink,
  LogoSlot,
  LogoText,
  MobileOnlyBurgerButton,
} from "components/Header/styles";
import {
  headerI18nPrefix,
  headerLogoSpriteId,
  headerMobileMenuId,
  headerRoutes,
  headerSpriteRef,
  headerSpriteSymbolIds,
} from "constants/MainPages";

type HeaderLogoProps = {
  href?: string;
  ariaLabel?: string;
};

type HeaderProps = {
  overlay?: boolean;
};

type HeaderBurgerButtonProps = {
  onClick: () => void;
  expanded: boolean;
  controls: string;
  ariaLabel: string;
};

function HeaderBurgerButton({
  onClick,
  expanded,
  controls,
  ariaLabel,
}: HeaderBurgerButtonProps) {
  return (
    <MobileOnlyBurgerButton
      onClick={onClick}
      aria-expanded={expanded}
      aria-controls={controls}
      aria-label={ariaLabel}
    >
      <BurgerIcon aria-hidden="true">
        <use href={headerSpriteRef(headerSpriteSymbolIds.burger)} />
      </BurgerIcon>
    </MobileOnlyBurgerButton>
  );
}

function HeaderLogo({ href = headerRoutes.home, ariaLabel }: HeaderLogoProps) {
  const { t } = useTranslation();
  const label = ariaLabel ?? t(`${headerI18nPrefix}.logoAlt`);

  return (
    <LogoLink href={href} aria-label={label}>
      <LogoIcon viewBox="0 0 36 36" aria-hidden>
        <use
          href={headerSpriteRef(headerLogoSpriteId)}
          width="36"
          height="36"
        />
      </LogoIcon>
      <LogoText>{t(`${headerI18nPrefix}.logoText`)}</LogoText>
    </LogoLink>
  );
}

export default function Header({ overlay = false }: HeaderProps) {
  const { t } = useTranslation();
  const { showBurgerMenu, isMenuOpen, openMenu, closeMenu } = useHeader();

  return (
    <HeaderShell $isOverlay={overlay}>
      <HeaderLayout>
        <HeaderBar>
          <HeaderFrame>
            <LogoSlot>
              <HeaderLogo
                href={headerRoutes.home}
                ariaLabel={t(`${headerI18nPrefix}.aria.homeLink`)}
              />
            </LogoSlot>

            <DesktopNavCenter>
              <DesktopNav
                aria-label={t(`${headerI18nPrefix}.aria.desktopNavigation`)}
              >
                <NavLinks />
              </DesktopNav>
            </DesktopNavCenter>

            <HeaderTrailing>
              {showBurgerMenu ? (
                <HeaderBurgerButton
                  onClick={openMenu}
                  expanded={isMenuOpen}
                  controls={headerMobileMenuId}
                  ariaLabel={t(`${headerI18nPrefix}.aria.openMenu`)}
                />
              ) : (
                <AuthActions />
              )}
            </HeaderTrailing>
          </HeaderFrame>
        </HeaderBar>
      </HeaderLayout>

      {showBurgerMenu ? (
        <BurgerModal
          id={headerMobileMenuId}
          isOpen={isMenuOpen}
          onClose={closeMenu}
        />
      ) : null}
    </HeaderShell>
  );
}
