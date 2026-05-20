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
  UpgradeButton,
} from "./styles";

type MessageKey = "customRules" | "syntheticData";

type ProFeatureModalProps = {
  open: boolean;
  onClose: () => void;
  messageKey: MessageKey;
};

const MESSAGE_I18N_KEYS: Record<MessageKey, string> = {
  customRules: "proFeature.customRules",
  syntheticData: "proFeature.syntheticData",
};

export const ProFeatureModal = ({
  open,
  onClose,
  messageKey,
}: ProFeatureModalProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate(PRICING_ROUTE);
  };

  return (
    <BaseModal open={open} onClose={onClose} closeLabel={t("proFeature.close")}>
      <ModalHeader>
        <ModalIconBadge>
          <ModalIcon />
        </ModalIconBadge>

        <ModalTextGroup>
          <ModalTitle>{t("proFeature.title")}</ModalTitle>
          <ModalMessage>{t(MESSAGE_I18N_KEYS[messageKey])}</ModalMessage>
        </ModalTextGroup>
      </ModalHeader>

      <ModalActions>
        <UpgradeButton
          variant="contained"
          onClick={handleUpgrade}
          disableElevation
        >
          {t("proFeature.upgrade")}
        </UpgradeButton>
      </ModalActions>
    </BaseModal>
  );
};
