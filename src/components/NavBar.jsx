import {useState} from 'react'
import {Menu, X} from 'lucide-react'
import { Link } from 'react-router-dom';


function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-[#2D4F2B] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-[#FFEB00]">MyPocketFarm</h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-8 text-lg">
          <li className="hover:text-[#FFEB00] cursor-pointer">Home</li>
          <a href="#benefits" className="hover:text-[#FFEB00] cursor-pointer">Benefits</a>
          <li className="relative cursor-pointer group">
  <a href="#practices" className="hover:text-[#FFEB00]">Practices</a>
  <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded shadow-md z-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
    <ul className="py-2">
      <Link to="/practices/sack-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Sack Gardening</li>
</Link>
<Link to="/practices/container-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Container Gardening</li>
</Link>
<Link to="/practices/barrel-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Barrel Gardening</li>
</Link>
<Link to="/practices/layer-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Layer Gardening</li>
</Link>
<Link to="/practices/bottle-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Bottle Gardening</li>
</Link>
<Link to="/practices/vertical-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Vertical Gardening</li>
</Link>
    </ul>
  </div>
</li>
          <a href="#contacts" className="hover:text-[#FFEB00] cursor-pointer">Contact</a>
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#2D4F2B] text-white px-6 pb-4">
          <ul className="space-y-4 text-lg">
            <li className="hover:text-[#FFEB00] cursor-pointer">Home</li>
           <li> <a href="#benefits" onClick={() => setIsOpen(false)} className="hover:text-[#FFEB00] cursor-pointer">Benefits</a></li>
            <a href="#practices" onClick={() => setIsOpen(false)}className="hover:text-[#FFEB00] cursor-pointer">Practices</a>
            <ul className="ml-4 text-sm space-y-2">
               <Link to="/practices/sack-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Sack Gardening</li>
</Link>
<Link to="/practices/container-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Container Gardening</li>
</Link>
<Link to="/practices/barrel-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Barrel Gardening</li>
</Link>
<Link to="/practices/layer-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Layer Gardening</li>
</Link>
<Link to="/practices/bottle-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Bottle Gardening</li>
</Link>
<Link to="/practices/vertical-gardening">
  <li className="px-4 py-2 hover:bg-[#059212]/20">Vertical Gardening</li>
</Link>
            </ul>
            <a href="#contacts" onClick={() => setIsOpen(false)} className="hover:text-[#FFEB00] cursor-pointer">Contact</a>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar