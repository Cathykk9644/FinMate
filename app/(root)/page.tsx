import BalanceBox from "@/components/BalanceBox";
import HeaderBox from "@/components/HeaderBox";
import React from "react";

const HomePage = () => {
  const loggedIn = { firstName: "Cathy", lastName: "Hui" };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="👋 Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your personal account and transaction effectively."
        />
        <BalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={49966.19}
        />
      </div>
    </section>
  );
};

export default HomePage;
