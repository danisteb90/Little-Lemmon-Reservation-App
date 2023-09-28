import logo from '../assets/img/Logo.svg';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer id='footer' className='flex flex-col items-center md:flex-row justify-between px-8 py-5 bg-card-color border-t-4 border-color-1 rounded-md'>
            <img src={logo} alt="logo" className='w-[200px]' />
            <ul className='text-sm md:ml-[-110px] hidden md:block'>
                <li>
                    <p className='font-bold'>Navigation</p>
                    <a className='hover:text-color-2' href="#">Home</a>
                </li>
                <li>
                    <Link to='header' smooth={true} duration={1000} offset={50} className='hover:text-color-2 cursor-pointer'>Menu</Link>
                </li>
                <li>
                    <Link to='dishes' smooth={true} duration={1000} offset={50} className='hover:text-color-2 cursor-pointer'>Order Online</Link>
                </li>
                <li>
                    <Link to='footer' smooth={true} duration={1000} offset={50} className='hover:text-color-2 cursor-pointer'>Contact</Link>
                </li>
                <li>
                    <Link to='header' smooth={true} duration={1000} offset={50} className='hover:text-color-2 cursor-pointer'>Login</Link>
                </li>
            </ul>
            <article className='flex justify-center items-center gap-5 mb-5 md:mb-0'>
                <h2 className='font-bold'>Open Hours</h2>
                <section>
                    <div className='hover:bg-color-1 hover:text-white cursor-pointer p-2 hover:scale-110 transition-all rounded-md'>
                        <p>Monday - Saturday</p>
                        <p>8:00am to 9:00pm</p>
                    </div>
                    <hr className='border-color-1'></hr>
                    <div className='hover:bg-color-1 hover:text-white cursor-pointer p-2 hover:scale-110 transition-all rounded-md'>
                        <p>Sunday</p>
                        <p>8:00am to 4:00pm</p>
                    </div>
                </section>
            </article>
            <section className='flex gap-2 items-center justify-center'>
                <h2 className='font-bold'>Follow Us:</h2>
                <div className='flex items-center justify-center gap-2 text-2xl'>
                    <div className='cursor-pointer hover:text-color-1 hover:scale-125 transition-all ease-in'><ion-icon name="logo-facebook"></ion-icon></div>
                    <div className='cursor-pointer hover:text-color-1 hover:scale-125 transition-all ease-in'><ion-icon name="logo-instagram"></ion-icon></div>
                    <div className='cursor-pointer hover:text-color-1 hover:scale-125 transition-all ease-in'><ion-icon name="logo-twitter"></ion-icon></div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
