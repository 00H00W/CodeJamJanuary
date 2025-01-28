import Articles from "../Articles/Articles";
import Search from "../Search/Search";
import MapDisplay from "../MapDisplay/MapDisplay";
import "./Main.css";

function Main() {
  return (
    <main>
      <Search />
      <Articles />
      <MapDisplay />
    </main>
  );
}

export default Main;
