export function NavBar() {
  return (
    <div className="nav_container">
      <nav className="nav_bar">
        <a className="nav_item" href="/">
          Home
        </a>
        <a className="nav_item" href="/about">
          O nas
        </a>
        <a className="nav_item" href="/products">
          Wypieki
        </a>
        <a className="nav_item" href="/contact">
          Kontakt
        </a>
      </nav>
    </div>
  );
}
