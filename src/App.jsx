import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
