import { CgNametag } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row text--600">
        <div className="">
          <a href="" className="text-white font-mono text-3xl tracking-wider flex items-center">
            <CgNametag /> PACEPLOYT
          </a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden md:hidden lg:block space-x-2">
            <a href="" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
            <a href="" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Project</a>
            <a href="" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Testimony</a>
          </div>
        </div>
        <div size={30} className="text-white lg:hidden cursor-pointer">
          {toggle ? (
            <AiOutlineClose size={30} onClick={closeMenu} />
          ) : (
            <HiMenuAlt1 size={30} onClick={openMenu} />
          )}
        </div>
      </div>
        {toggle ? (
          <div className="lg:hidden justify-between ml-10">
            <ul>
              <li className="flex flex-col text-xl mb-2">
                <a href="" className="text-white">Skills</a>
              </li>
              <li className="flex flex-col text-xl mb-2">
                <a href="" className="text-white">Portfolio</a>
              </li>
              <li className="flex flex-col text-xl mb-2">
                <a href="" className="text-white">Project</a>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      
      
    </>
  );
}

export default Nav;
