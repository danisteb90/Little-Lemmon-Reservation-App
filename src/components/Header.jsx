import { useState } from 'react';
import logo from '../assets/img/Logo.svg';
import MainButton from './MainButton';

const Header = () => {

  const links = [
    {
      name: 'Menu',
      link: '/',
    },
    {
      name: 'Events',
      link: '/',
    },
    {
      name: 'Order Online',
      link: '/',
    },
    {
      name: 'Contact',
      link: '/',
    },
    {
      name: 'Login',
      link: '/',
    }
  ]

  const [open, setOpen] = useState(false)

return (
  <header className='md:flex md:items-center justify-between py-[20px] px-[30px]'>
    <img src={logo} alt="logo" className='md:w-[220px] h-auto' />
    <div onClick={() => setOpen(!open)} className=' text-4xl text-color-2 absolute right-8 top-6 md:hidden cursor-pointer transition-all duration-200 ease-out z-10'>
      <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
    </div>
    <ul className={`absolute md:static md:flex md:pb-0 pb-8 md:bg-white bg-color-1 text-color-2 md:text-black z-[1] md:z-auto left-0 w-full md:w-auto pl-9 md:pl-0 items-center gap-5 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-350px] opacity-0 md:opacity-100'}`}>
      {links.map((link) => (
        <li className='font-bold md:my-0 my-6 cursor-pointer hover:text-color-2' key={link.name}>
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
      <MainButton
      bgcolor = 'bg-color-2 hover:text-white hover:bg-color-1'
      >
      Reserve a Table
    </MainButton>
    </ul>
  </header>
);
};

export default Header;
