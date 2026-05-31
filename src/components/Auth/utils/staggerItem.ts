import { heroRevealDuration } from "constants/auth";
import { fadeUp } from "components/Auth/styles";

const staggerItem = (delay: number) => ({
  animation: `${fadeUp} ${heroRevealDuration}ms cubic-bezier(0.2, 0.9, 0.2, 1) both`,
  animationDelay: `${delay}ms`,
});

export default staggerItem;
