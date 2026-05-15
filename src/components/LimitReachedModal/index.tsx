import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PRICING_ROUTE } from "constants/PricingPage";
import { useAppSelector } from "store/hooks";

import {
  ModalActions,
  ModalContent,
  ModalMessage,
  ModalTitle,
  StyledDialog,
  UpgradeButton,
  WaitButton,
} from "./styles";

type LimitReachedModalProps = {
  open: boolean;
  onClose: () => void;
};

export const LimitReachedModal = ({
  open,
  onClose,
}: LimitReachedModalProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dailyLimit = useAppSelector(
    (state) => state.pricing.current?.dailyLimit ?? 5,
  );

  const handleUpgrade = () => {
    navigate(PRICING_ROUTE);
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <ModalTitle>{t("limitReached.title")}</ModalTitle>

      <ModalContent>
        <ModalMessage>
          {t("limitReached.message", { limit: dailyLimit })}
        </ModalMessage>
      </ModalContent>

      <ModalActions>
        <WaitButton variant="outlined" onClick={onClose} disableElevation>
          {t("limitReached.wait")}
        </WaitButton>
        <UpgradeButton
          variant="contained"
          onClick={handleUpgrade}
          disableElevation
        >
          {t("limitReached.upgrade")}
        </UpgradeButton>
      </ModalActions>
    </StyledDialog>
  );
};
