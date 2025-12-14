import { NavBar } from "~/components/NavBar/NavBar";

export function Welcome() {
  return (
    <main className="welcome">
      <div className="center description">
        <p>Jakiś tekst motywacyjny, że może i dostaniesz cukrzycy ale za to życie będziesz miał słodkie i szczęśliwe.</p>
        <p>Oczywiście trza o jeszcze wszystko ostylować, bo wygląda jak psu z gardła wyjęte.</p>
        <p>Tu by się jakieś duze zjęcie ciasta (lub ciast) na tło przydało.</p>
      </div>
      <div className="center">
        <img src="./dwaCiacha.png" alt="" />
      </div>
    </main>
  );
}
