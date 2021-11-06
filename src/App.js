import MovieList from './MovieList';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';

function App() {
  return (
    <MovieProvider>
      <div>
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
