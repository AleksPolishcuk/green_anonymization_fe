import { useMemo } from "react";

import Box from "@mui/material/Box";
import {
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import { SpriteIcon } from "components/SpriteIcon";
import {
  footerInternalPaths,
  footerMainLogoHeightPx,
  footerMainLogoMaxWidthPx,
  footerNavGroups,
  footerSocialIconButtonPx,
  footerSocialProfileUrls,
  spriteSymbolIds,
  spriteViewBoxes,
} from "shared/constants/footer";
import {
  FooterBody,
  FooterBottom,
  FooterBrandBlock,
  FooterBrandRow,
  FooterContainer,
  FooterDescription,
  FooterLegalRow,
  FooterRoot,
  FooterSocialRow,
  FooterTop,
  footerCopyrightSx,
  footerLegalLinkSx,
  footerMainLogoInnerSx,
  footerNavColumnStackSx,
  footerNavGridSx,
  footerNavHeadingSx,
  footerNavListSx,
  footerNavLinkSx,
  footerSocialIconButtonSx,
} from "components/Footer/styles";

export function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobileLayout = useMediaQuery(theme.breakpoints.down("md"));
  const copyrightYear = useMemo(() => new Date().getFullYear(), []);

  const privacyLabelKey = isMobileLayout
    ? "footer.legal.privacyFull"
    : "footer.legal.privacy";
  const termsLabelKey = isMobileLayout
    ? "footer.legal.termsFull"
    : "footer.legal.terms";
  const cookiesLabelKey = isMobileLayout
    ? "footer.legal.cookiesFull"
    : "footer.legal.cookies";

  return (
    <FooterRoot>
      <FooterContainer maxWidth={false} disableGutters>
        <FooterBody>
          <FooterTop>
            <FooterBrandBlock>
              <FooterBrandRow>
                <Box
                  component="span"
                  role="img"
                  aria-label={t("footer.brandName")}
                  sx={{
                    display: "block",
                    flexShrink: 0,
                    alignSelf: "flex-start",
                    width: "100%",
                    maxWidth: footerMainLogoMaxWidthPx,
                    height: footerMainLogoHeightPx,
                    lineHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  <SpriteIcon
                    symbolId={spriteSymbolIds.mainLogo}
                    viewBox={spriteViewBoxes.mainLogo}
                    preserveAspectRatio="xMinYMid slice"
                    decorative
                    sx={footerMainLogoInnerSx}
                  />
                </Box>
              </FooterBrandRow>
              <FooterDescription variant="body2">
                {t("footer.description")}
              </FooterDescription>
              <FooterSocialRow>
                <IconButton
                  component="a"
                  href={footerSocialProfileUrls.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.social.xAria")}
                  sx={footerSocialIconButtonSx}
                >
                  <SpriteIcon
                    symbolId={spriteSymbolIds.twitter}
                    viewBox={spriteViewBoxes.social}
                    width={footerSocialIconButtonPx}
                    height={footerSocialIconButtonPx}
                    decorative
                  />
                </IconButton>
                <IconButton
                  component="a"
                  href={footerSocialProfileUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.social.linkedinAria")}
                  sx={footerSocialIconButtonSx}
                >
                  <SpriteIcon
                    symbolId={spriteSymbolIds.linkedin}
                    viewBox={spriteViewBoxes.social}
                    width={footerSocialIconButtonPx}
                    height={footerSocialIconButtonPx}
                    decorative
                  />
                </IconButton>
                <IconButton
                  component="a"
                  href={footerSocialProfileUrls.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("footer.social.githubAria")}
                  sx={footerSocialIconButtonSx}
                >
                  <SpriteIcon
                    symbolId={spriteSymbolIds.github}
                    viewBox={spriteViewBoxes.social}
                    width={footerSocialIconButtonPx}
                    height={footerSocialIconButtonPx}
                    decorative
                  />
                </IconButton>
              </FooterSocialRow>
            </FooterBrandBlock>

            <Stack
              component="nav"
              aria-label={t("footer.navAria")}
              sx={footerNavGridSx}
            >
              {footerNavGroups.map((group) => {
                const sectionHeadingId = `footer-nav-${group.columnTitleKey.replace(/\./g, "-")}`;
                return (
                  <Stack
                    key={group.columnTitleKey}
                    component="section"
                    aria-labelledby={sectionHeadingId}
                    sx={footerNavColumnStackSx}
                  >
                    <Typography
                      variant="h4"
                      component="h2"
                      id={sectionHeadingId}
                      sx={footerNavHeadingSx}
                    >
                      {t(group.columnTitleKey)}
                    </Typography>
                    <Box component="ul" sx={footerNavListSx}>
                      {group.links.map((item) => (
                        <Box component="li" key={item.to}>
                          <Link
                            component={RouterLink}
                            to={item.to}
                            variant="body2"
                            underline="none"
                            sx={footerNavLinkSx}
                          >
                            {t(item.labelKey)}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  </Stack>
                );
              })}
            </Stack>
          </FooterTop>

          <FooterBottom>
            <Typography variant="caption" component="p" sx={footerCopyrightSx}>
              {t("footer.copyright", { year: copyrightYear })}
            </Typography>
            <FooterLegalRow>
              <Link
                component={RouterLink}
                to={footerInternalPaths.privacy}
                underline="none"
                sx={footerLegalLinkSx}
              >
                {t(privacyLabelKey)}
              </Link>
              <Link
                component={RouterLink}
                to={footerInternalPaths.terms}
                underline="none"
                sx={footerLegalLinkSx}
              >
                {t(termsLabelKey)}
              </Link>
              <Link
                component={RouterLink}
                to={footerInternalPaths.cookies}
                underline="none"
                sx={footerLegalLinkSx}
              >
                {t(cookiesLabelKey)}
              </Link>
            </FooterLegalRow>
          </FooterBottom>
        </FooterBody>
      </FooterContainer>
    </FooterRoot>
  );
}

export default Footer;
