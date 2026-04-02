import { BurgerIcon, MobileOnlyBurgerButton } from "components/Header/components/BurgerButton/styles";

type BurgerButtonProps = {
  onClick: () => void;
  expanded: boolean;
  controls: string;
  ariaLabel: string;
};

export function BurgerButton({ onClick, expanded, controls, ariaLabel }: BurgerButtonProps) {
  return (
    <MobileOnlyBurgerButton onClick={onClick} aria-expanded={expanded} aria-controls={controls} aria-label={ariaLabel}>
      <BurgerIcon aria-hidden="true">
        <use href="/sprite.svg#icon-burger" />
      </BurgerIcon>
    </MobileOnlyBurgerButton>
  );
}
