import { useEffect, useRef } from "react";
import { AuthActions } from "components/Header/components/AuthActions";
import { NavLinks } from "components/Header/components/NavLinks";
import {
  CloseButton,
  CloseIcon,
  ModalActions,
  ModalBody,
  ModalHeader,
  ModalNav,
  ModalNavLink,
  Overlay,
  Panel,
} from "components/Header/components/BurgerModal/styles";
import { headerI18nPrefix } from "components/Header/constants";
import { useTranslation } from "react-i18next";

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
          <CloseButton ref={closeButtonRef} onClick={onClose} aria-label={t(`${headerI18nPrefix}.aria.closeMenu`)}>
            <CloseIcon aria-hidden="true">
              <use href="/sprite.svg#icon-close" />
            </CloseIcon>
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <ModalNav>
            <NavLinks LinkComponent={ModalNavLink} onNavigate={onClose} />
          </ModalNav>

          <ModalActions>
            <AuthActions compact onAction={onClose} />
          </ModalActions>
        </ModalBody>
      </Panel>
    </Overlay>
  );
}
