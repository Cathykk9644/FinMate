import BalanceBox from "@/components/BalanceBox";
import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import React from "react";

const HomePage = () => {
  const loggedIn = {
    firstName: "Cathy",
    lastName: "Hui",
    email: "contact@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="👋 👋 Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your personal account and transaction effectively."
        />
        <BalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={49966.19}
        />
        Recent Transaction
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1644.91 }, { currentBalance: 644.94 }]}
      />
    </section>
  );
};

export default HomePage;
