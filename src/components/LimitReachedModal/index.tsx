import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { PRICING_ROUTE } from "constants/PricingPage";
import { BaseModal } from "components/BaseModal";

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
import { useLimitInfo } from "./hooks/useResetTime";

type LimitReachedModalProps = {
  open: boolean;
  onClose: () => void;
  variant?: "documents" | "edits";
};

export const LimitReachedModal = ({
  open,
  onClose,
  variant = "documents",
}: LimitReachedModalProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { resetTimeLabel, dailyLimit, dailyEditLimit } = useLimitInfo();

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
          <ModalTitle>
            {variant === "edits"
              ? t("limitReached.editsTitle")
              : t("limitReached.title")}
          </ModalTitle>
          <ModalMessage>
            {variant === "edits"
              ? t("limitReached.editsMessage", { limit: dailyEditLimit })
              : t("limitReached.message", { limit: dailyLimit })}
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
