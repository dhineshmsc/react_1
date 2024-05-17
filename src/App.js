import logo from './logo.svg';
import './App.css';
import Book from './components/book.js'
import ow from './Images/ow.webp'
import Car from './components/car';
import Sub from './components/subject';
import Nav from './components/nav';
import Favorite from './components/favorite.js';
import List from './components/list.js';


function App() {
  return (

    <div>

      <div>
        <div className="container text-center">
          <h2>Welcome to object ways</h2>
          <img src={ow} className="img-fluid" alt="Responsive image"></img>
        </div>
      </div>
      {/* <Car />
      <Sub />
      <Nav /> */}
      <Favorite />
      <List />
    </div>
  );


}

export default App;
