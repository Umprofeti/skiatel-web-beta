import { Logo, NavBarLinks } from 'src/app/(app)/types/globals';
import Image from 'next/image';
import Link from 'next/link';

type DekstopHeader = {
    Logo: Logo,
    NavBarLinks: NavBarLinks
}

// Aquí se agrega un botón para el menú tipo burger
export const MobileHeader = ({ props }: { props: DekstopHeader }) => (
    <div className='flex lg:hidden bg-secondary text-primary  flex-row w-full items-center justify-between px-4 py-2 my-1 rounded-lg shadow-md fixed top-0'>
        {/* Logo */}
        <div className='w-[90%]  rounded-full '>
            <Link href='/' className='w-full'>
                <Image
                    src={`http://localhost:3000${props.Logo.url}`}
                    height={props.Logo.height}
                    width={props.Logo.width}
                    alt={props.Logo.filename}
                    className='w-[12%] hover:scale-110 transition-all hover:backdrop-brightness-90 mx-auto hover:drop-shadow-iluminate'
                />
            </Link>
        </div>
        {/* Aquí se agrega el botón del menú tipo burger */}
        <div className='w-[10%] flex flex-row gap-6'>
            <button className='burger-menu-button'>
                <div className='burger-menu-line'></div>
                <div className='burger-menu-line'></div>
                <div className='burger-menu-line'></div>
            </button>
        </div>
    </div>
);