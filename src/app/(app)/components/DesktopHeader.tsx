import {Logo, NavBarLinks} from 'src/app/(app)/types/globals'
import Image from 'next/image'
import Link from 'next/link'

type DekstopHeader = {
    Logo:Logo,
    NavBarLinks:NavBarLinks
}

export const DesktopHeader = ({props}:{props:DekstopHeader}) => {
    console.log(props.Logo.url)
    return (
        <div className='hidden lg:flex bg-secondary text-primary flex-row w-full items-center px-4 py-2 my-4 rounded-lg justify-between shadow-md fixed top-0'>
            {/* Logo */}
            <div className='w-[5%] rounded-full'>
                <Link href='/' className=''>
                    <Image 
                        src={`http://localhost:3000${props.Logo.url}`}
                        height={props.Logo.height}
                        width={props.Logo.width}
                        alt={props.Logo.filename}
                        className='w-full hover:scale-110 transition-all hover:backdrop-brightness-90 hover:drop-shadow-iluminate'
                    />
                </Link>
            </div>
            <div className='flex flex-row gap-6'>
                {props.NavBarLinks.map(item => {
                    return (
                           <Link className='transition-all hover:scale-110 hover:text-Active' key={item.id} href={`#${item.idSection}`}>
                                <span className='font-Aeros '>{item.Section.toUpperCase()}</span>
                            </Link>
                    )
                })}
            </div>
        </div>
    )
}