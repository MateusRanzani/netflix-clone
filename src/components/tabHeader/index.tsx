import "./TabHeader.css";

export const TabHeader = ({ black }: any) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="">
          <img src="/assets/matflix.svg" alt="matflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="">
          <img src="/assets/user.jpg" alt="usuário" />
        </a>
      </div>
    </header>
  );
};
