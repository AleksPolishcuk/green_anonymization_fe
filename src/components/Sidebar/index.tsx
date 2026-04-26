import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { headerSpriteRef } from "constants/header";

import {
  SidebarExitIcon,
  SidebarLogoBox,
  SidebarLogoIcon,
  SidebarLogoRow,
  SidebarNav,
  SidebarNavIcon,
  SidebarNavIconBox,
  SidebarNavItem,
  SidebarProfileContainer,
  SidebarProfileIcon,
  SidebarProfileTextContainer,
  SidebarProFileTextHeading,
  SidebarProFileTextSubtitle,
  SidebarRoot,
  SidebarSectionTitle,
  SidebarSubtitle,
  SidebarTextBlock,
  SidebarTitle,
} from "./styles";
import { useAppSelector } from "store/hooks";
import { logout } from "store/slices/authSlice";
import { useAppDispatch } from "store/hooks";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth?.user);
  const handleExitClick = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <SidebarRoot>
      <SidebarLogoRow to="/">
        <SidebarLogoBox>
          <SidebarLogoIcon aria-hidden="true">
            <use href={headerSpriteRef("icon-logo-work")} />
          </SidebarLogoIcon>
        </SidebarLogoBox>

        <SidebarTextBlock>
          <SidebarTitle variant="h5">{t("sidebar.title")}</SidebarTitle>
          <SidebarSubtitle variant="body2">
            {t("sidebar.subtitle")}
          </SidebarSubtitle>
        </SidebarTextBlock>
      </SidebarLogoRow>

      <SidebarSectionTitle>
        {t("sidebar.workspace", "WORKSPACE")}
      </SidebarSectionTitle>

      <SidebarNav>
        <SidebarNavItem to="/dashboard">
          <SidebarNavIconBox>
            <SidebarNavIcon aria-hidden="true">
              <use href={headerSpriteRef("icon-dashboard")} />
            </SidebarNavIcon>
          </SidebarNavIconBox>
          <Typography variant="body1">{t("sidebar.dashboard")}</Typography>
        </SidebarNavItem>

        <SidebarNavItem to="/deidentification">
          <SidebarNavIconBox>
            <SidebarNavIcon aria-hidden="true">
              <use href={headerSpriteRef("pii")} />
            </SidebarNavIcon>
          </SidebarNavIconBox>
          <Typography variant="body1">{t("sidebar.deidentify")}</Typography>
        </SidebarNavItem>

        <SidebarNavItem to="/syntheticdata">
          <SidebarNavIconBox>
            <SidebarNavIcon aria-hidden="true">
              <use href={headerSpriteRef("synthetic")} />
            </SidebarNavIcon>
          </SidebarNavIconBox>
          <Typography variant="body1">{t("sidebar.syntheticData")}</Typography>
        </SidebarNavItem>
      </SidebarNav>
      <SidebarProfileContainer>
        <SidebarProfileIcon>
          {user?.firstName.charAt(0)}
          {user?.lastName.charAt(0)}
        </SidebarProfileIcon>

        <SidebarProfileTextContainer>
          <SidebarProFileTextHeading>
            {user?.firstName} {user?.lastName}
          </SidebarProFileTextHeading>
          <SidebarProFileTextSubtitle>{user?.email}</SidebarProFileTextSubtitle>
        </SidebarProfileTextContainer>

        <SidebarExitIcon onClick={handleExitClick}>
          <use href={headerSpriteRef("icon-exit")} />
        </SidebarExitIcon>
      </SidebarProfileContainer>
    </SidebarRoot>
  );
}
