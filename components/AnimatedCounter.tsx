"use client";

import Countup from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <Countup
        end={amount}
        duration={2}
        decimals={2}
        decimal="."
        prefix="HK$"
      />
    </div>
  );
};

export default AnimatedCounter;
