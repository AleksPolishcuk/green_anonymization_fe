import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { AuthActions } from "components/Header/AuthActions";
import { ThemeToggle } from "components/ThemeToggle";
import { LanguageSwitcher } from "components/LanguageSwitcher";
import {
  CloseButton,
  CloseIcon,
  ModalActions,
  ModalBody,
  ModalHeader,
  ModalHeaderActions,
  ModalLogoIcon,
  ModalNav,
  ModalNavLink,
  Overlay,
  Panel,
} from "components/Header/BurgerModal/styles";
import { NavLinks } from "components/Header/NavLinks";
import {
  headerI18nPrefix,
  headerLogoSpriteId,
  headerSpriteRef,
  headerSpriteSymbolIds,
} from "constants/MainPages";

type BurgerModalProps = {
  isOpen: boolean;
  id: string;
  onClose: () => void;
};

export function BurgerModal({ isOpen, id, onClose }: BurgerModalProps) {
  const { t } = useTranslation();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <Overlay $isOpen={isOpen} onClick={onClose} aria-hidden={!isOpen}>
      <Panel
        id={id}
        $isOpen={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label={t(`${headerI18nPrefix}.aria.mobileMenu`)}
        onClick={(event) => event.stopPropagation()}
      >
        <ModalHeader>
          <ModalHeaderActions>
            <ModalLogoIcon viewBox="0 0 36 36" aria-hidden="true">
              <use
                href={headerSpriteRef(headerLogoSpriteId)}
                width={36}
                height={36}
              />
            </ModalLogoIcon>
            <ThemeToggle />
            <LanguageSwitcher />
          </ModalHeaderActions>

          <CloseButton
            ref={closeButtonRef}
            onClick={onClose}
            aria-label={t(`${headerI18nPrefix}.aria.closeMenu`)}
          >
            <CloseIcon aria-hidden="true">
              <use href={headerSpriteRef(headerSpriteSymbolIds.close)} />
            </CloseIcon>
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <ModalNav>
            <NavLinks
              LinkComponent={ModalNavLink}
              onNavigate={onClose}
              showIcons
            />
          </ModalNav>

          <ModalActions>
            <AuthActions compact onAction={onClose} />
          </ModalActions>
        </ModalBody>
      </Panel>
    </Overlay>
  );
}
