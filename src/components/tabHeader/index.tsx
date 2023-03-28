import "./TabHeader.css";

export const TabHeader = ({ black }: any) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="">
          <img
            src="https://drive.google.com/uc?id=1FdYOzD3phOlQWKfVxz07utOqVeA3Ep08"
            alt="matflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="">
          <img
            src="https://drive.google.com/uc?id=1cyWay4rl8nbJ4sFAxP9VdMEya5EJlLXj"
            alt="usuário"
          />
        </a>
      </div>
    </header>
  );
};
