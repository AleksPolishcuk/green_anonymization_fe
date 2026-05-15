import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PRICING_ROUTE } from "constants/PricingPage";
import { useAppSelector } from "store/hooks";
import { BaseModal } from "components/BaseModal";
import { useResetTime } from "./hooks/useResetTime";

import {
  ModalActions,
  ModalHeader,
  ModalIcon,
  ModalIconBadge,
  ModalMessage,
  ModalTextGroup,
  ModalTitle,
  ResetInfo,
  ResetInfoText,
  UpgradeButton,
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
  const resetTimeLabel = useResetTime();
  const dailyLimit = useAppSelector(
    (state) => state.pricing.current?.dailyLimit ?? 5,
  );

  const handleUpgrade = () => {
    navigate(PRICING_ROUTE);
    onClose();
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      closeLabel={t("limitReached.close")}
    >
      <ModalHeader>
        <ModalIconBadge>
          <ModalIcon />
        </ModalIconBadge>

        <ModalTextGroup>
          <ModalTitle>{t("limitReached.title")}</ModalTitle>
          <ModalMessage>
            {t("limitReached.message", { limit: dailyLimit })}
          </ModalMessage>
        </ModalTextGroup>
      </ModalHeader>

      <ResetInfo>
        <ResetInfoText>{resetTimeLabel}</ResetInfoText>
      </ResetInfo>

      <ModalActions>
        <UpgradeButton
          variant="contained"
          onClick={handleUpgrade}
          disableElevation
        >
          {t("limitReached.upgrade")}
        </UpgradeButton>
      </ModalActions>
    </BaseModal>
  );
};
