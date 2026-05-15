import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import type { DialogProps } from "@mui/material/Dialog";

import { headerSpriteRef, headerSpriteSymbolIds } from "constants/MainPages";

import { CloseButton, CloseIcon, StyledDialog } from "./styles";

type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: DialogProps["maxWidth"];
  closeLabel?: string;
};

export const BaseModal = ({
  open,
  onClose,
  children,
  maxWidth = "xs",
  closeLabel,
}: BaseModalProps) => {
  const { t } = useTranslation();

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth>
      <CloseButton
        onClick={onClose}
        aria-label={closeLabel ?? t("common.close")}
      >
        <CloseIcon aria-hidden="true">
          <use href={headerSpriteRef(headerSpriteSymbolIds.close)} />
        </CloseIcon>
      </CloseButton>

      {children}
    </StyledDialog>
  );
};
