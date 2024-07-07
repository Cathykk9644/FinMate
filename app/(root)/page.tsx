import BalanceBox from "@/components/BalanceBox";
import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const HomePage = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="👋 👋 Welcome"
          user={loggedIn?.name || "Guest"}
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
