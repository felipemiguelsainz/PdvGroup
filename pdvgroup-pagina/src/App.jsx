import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import Landing from './Components/Landing/Landing';
import ContainerPpal from './Components/ContainerPpal/ContainerPpal';
import ContainerEmpresas from './Components/ContainerEmpresas/ContainerEmpresas';
import Services from './Components/ContainterServicios/Services';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <>
      <NavBarComponent/>
      <Landing/>
      <ContainerPpal/>
      <ContainerEmpresas/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
