import logo from './logo.svg';
import './App.css';
import Route from 'react-router-dom/Route';


import About from './Pages/About/AboutPage'; 
import MyNavbar from './Navbar/MyNavbar'; 
import Carousel from './Carousel/MyCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <MyNavbar/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
      </header>

      <body className="App-body">
        <p className="midPara">
        <h1 className="midTitle">Nepal Health Stats</h1>
        Nepal Health Stats is a web application that tracks and presents the health indicators 
        of the Nepalese population for the Nepal Ministry of Health in a simple, rich and 
        interactive manner. All data is taken from officially-recognized sources.
        </p>    

      </body>    

      <br></br> 

      <div className="App-Carousel">

        <Carousel/>

      </div>

    
      <div>       

        <Route path="/about" exact component={About}/>
        
        {/* <Route path="/" exact component={App}/> */}        

      </div>  
      

    </div>
  );
}

export default App;
