import { useTranslation } from "react-i18next";

import {
  headerI18nPrefix,
  headerLogoSpriteId,
  headerLogoViewBox,
} from "components/Header/constants";

import {
  LogoIcon,
  LogoLink,
} from "components/Header/components/Logo/styles";

type LogoProps = {
  href?: string;
  ariaLabel?: string;
};

export function Logo({ href = "/", ariaLabel }: LogoProps) {
  const { t } = useTranslation();
  const vb = headerLogoViewBox;
  const label = ariaLabel ?? t(`${headerI18nPrefix}.logoAlt`);

  return (
    <LogoLink href={href} aria-label={label}>
      <LogoIcon
        viewBox={`0 0 ${vb.width} ${vb.height}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <use
          href={`/sprite.svg#${headerLogoSpriteId}`}
          width={vb.width}
          height={vb.height}
        />
      </LogoIcon>
    </LogoLink>
  );
}
