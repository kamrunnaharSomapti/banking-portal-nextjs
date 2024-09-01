import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const home = () => {
  const login = {
    firstName: "somapti",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={login?.firstName}
            subtext="Access and manage your account and transaction eficienctly"
          />
          <TotalBalanceBox />
        </header>
      </div>
    </section>
  );
};

export default home;
