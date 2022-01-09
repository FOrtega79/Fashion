import './App.css';
import AlertMessage from './components/AlertMessage/AlertMessage';
import Footer from './components/Footer/Footer';
import ResponsiveAppBar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <>
      <ResponsiveAppBar />
    
        <AppRoutes />

        <Footer />

        <AlertMessage />
    </>
  );
}

export default App;
