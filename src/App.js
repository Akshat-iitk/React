import './App.css' ;
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

 function MyApp() {
  return (
    <>
    {/* // as title is a prop in this component then we have to specify every title forf a new navbar function 
    // now we can creat multiple prop according to our purpose */}
    <Navbar title = "TextUtils"/>
    <div className="container my-24">  
    {/* a class from css which make TextForm resides in a container */}
    <TextForm heading = "Enter text below"/>
    </div>
    </>
  );
}
export default MyApp
