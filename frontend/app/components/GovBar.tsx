export function GovBar() {
  return (
    <div className="gov-bar">
      <div className="wrap">
        <div className="gov-bar__id">
          <span className="flag" aria-hidden="true" />
          <span>
            An official website of the{" "}
            <strong style={{ color: "#fff", fontWeight: 600 }}>Solomon Islands Government</strong>
          </span>
        </div>
        <nav className="gov-bar__links" aria-label="Utility">
          <a href="#">Yumi Fastaem</a>
          <a href="#">Staff Email</a>
          <a href="#">Tok Pisin</a>
        </nav>
      </div>
    </div>
  );
}
