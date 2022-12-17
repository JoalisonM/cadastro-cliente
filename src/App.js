import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ClientsProvider } from "./contexts/ClientContext";

function App() {
  return (
    <ClientsProvider>
      <Header />
      <Home />
      <Footer />
    </ClientsProvider>
  );
}

export default App;
