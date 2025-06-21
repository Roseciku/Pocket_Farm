import {useState} from 'react'
import {Menu, X} from 'lucide-react'



function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-[#2D4F2B] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-[#FFEB00]">PocketFarm</h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-8 text-lg">
          <li className="hover:text-[#FFEB00] cursor-pointer">Home</li>
          <li className="hover:text-[#FFEB00] cursor-pointer">Benefits</li>
          <li className="relative group cursor-pointer">
            <span className="hover:text-[#FFEB00]">Practices</span>
            <div className="absolute top-full mt-2 left-0 w-48 bg-white text-black shadow-md rounded hidden group-hover:block z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-[#059212]/20">Sack Gardening</li>
                <li className="px-4 py-2 hover:bg-[#059212]/20">Container Gardening</li>
                <li className="px-4 py-2 hover:bg-[#059212]/20">Barrel Gardening</li>
              </ul>
            </div>
          </li>
          <li className="hover:text-[#FFEB00] cursor-pointer">Contact</li>
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#2D4F2B] text-white px-6 pb-4">
          <ul className="space-y-4 text-lg">
            <li className="hover:text-[#FFEB00] cursor-pointer">Home</li>
            <li className="hover:text-[#FFEB00] cursor-pointer">Benefits</li>
            <li className="hover:text-[#FFEB00] cursor-pointer">Practices</li>
            <ul className="ml-4 text-sm space-y-2">
              <li className="hover:text-[#FFEB00] cursor-pointer">Sack Gardening</li>
              <li className="hover:text-[#FFEB00] cursor-pointer">Container Gardening</li>
              <li className="hover:text-[#FFEB00] cursor-pointer">Barrel Gardening</li>
            </ul>
            <li className="hover:text-[#FFEB00] cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default NavBar