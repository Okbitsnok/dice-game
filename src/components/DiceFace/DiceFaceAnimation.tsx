import React, { useEffect, useState } from "react";
import DiceFace from "./DiceFace";
import { DiceFaceContainer } from "./index.styled";

interface DiceFaceAnimationProps {
  roll: number | null;
}

const DiceFaceAnimation: React.FC<DiceFaceAnimationProps> = ({ roll }) => {
  const [showingRoll, setShowingRoll] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (roll !== null) {
      setIsAnimating(true);
      let currentRoll = 1;
      const interval = setInterval(() => {
        setShowingRoll(currentRoll);
        currentRoll = (currentRoll % 6) + 1;
      }, 200);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        setShowingRoll(roll);
        setIsAnimating(false);
      }, 3000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [roll]);

  return (
    <DiceFaceContainer isVisible={isAnimating}>
      <DiceFace roll={showingRoll} />
    </DiceFaceContainer>
  );
};

export default DiceFaceAnimation;
