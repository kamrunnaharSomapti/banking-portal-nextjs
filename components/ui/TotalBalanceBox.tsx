import AnimatedCounter from "../AnimatedCounter";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  console.log("totalBanks", totalBanks);
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* donught chart */}</div>
      <div className="flex flex-col gap-6 ">
        <h2 className="header-2">{totalBanks} Bank Accounts </h2>
        <div className="flex flex-col gap-2 ">
          <p className="total-balance-label">Total Current Balance</p>
        </div>
        <div>
          <h1 className="flex-center">
            <AnimatedCounter amount={totalCurrentBalance} />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
