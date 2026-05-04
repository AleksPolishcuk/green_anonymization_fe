import { useState } from "react";
import { useTranslation } from "react-i18next";
import { KeyboardArrowDown } from "@mui/icons-material";
import { ListItemText } from "@mui/material";

import { SwitcherButton, SwitcherMenu, SwitcherMenuItem } from "./styles";
import { SUPPORTED_LANGUAGES } from "constants/index";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (code: string) => {
    void i18n.changeLanguage(code);
    handleClose();
  };

  const currentCode = i18n.language?.slice(0, 2) ?? "en";

  return (
    <>
      <SwitcherButton onClick={handleOpen} aria-haspopup="true">
        {currentCode}
        <KeyboardArrowDown fontSize="small" />
      </SwitcherButton>

      <SwitcherMenu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {SUPPORTED_LANGUAGES.map(({ code, label }) => (
          <SwitcherMenuItem
            key={code}
            selected={currentCode === code}
            onClick={() => handleSelect(code)}
          >
            <ListItemText>{label}</ListItemText>
          </SwitcherMenuItem>
        ))}
      </SwitcherMenu>
    </>
  );
}
