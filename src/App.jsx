import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import HeroSection from "./components/HeroSection";
import MoviesContainer from "./components/MoviesContainer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MoviesContainer>
        <MovieCard />
      </MoviesContainer>
    </>
  );
}

export default App;
