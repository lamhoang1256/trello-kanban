import { BoardBar, Navbar } from "./layouts";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <BoardBar />
      <Home />
    </>
  );
};

export default App;
