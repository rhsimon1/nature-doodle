import HomePage from "./components/HomePage";
import Navbar from './components/NavBar';
export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100"> 
          <Navbar></Navbar>

          <HomePage></HomePage>
      
    </div>
  );
}
