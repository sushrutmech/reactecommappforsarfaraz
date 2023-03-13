
import './App.css';
import LandingPage from "./Pages/landingPage";
import Carosel from './Shared/component/carosel'
import NoteState from './Shared/servicesData/contex/notes/NotesState';

function App() {
  return (
    <>
      <NoteState>
        <div className="App">
          <LandingPage />
        </div>
      </NoteState>
    </>

  );
}

export default App;
