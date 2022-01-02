import './App.css';
import Footer from './components/Footer/Footer';
import ResponsiveAppBar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <>
      <ResponsiveAppBar />
    
        <AppRoutes />

        <Footer />
    </>
  );
}

export default App;
