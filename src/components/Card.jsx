
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Card({img, name, email, fb, linkedin}) {
  return (
    <div className='bg-white  h-[26rem] w-72 rounded-xl py-6 hover:scale-105 transition-transform duration-2000 flex flex-col items-center'>
        <img src={img} alt="" className='w-5/6'/>
        <div className='text-center mt-4'>
            <h2 className='font-bold'>{name}</h2>
            <p>Web Designer</p>
            {/* icons */}
            <div className='flex gap-4 mt-4 justify-center text-lg cursor-pointer'>
                <a href={email} target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} className='hover:text-blue-500 hover:scale-105 transition-transform duration-2000'/>
                </a>
                <a href={fb} target="_blank">
                    <FontAwesomeIcon icon={faFacebook} className='hover:text-blue-500 hover:scale-105 transition-transform duration-2000' />
                </a>
                <a href={linkedin} target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className='hover:text-blue-500 hover:scale-105 transition-transform duration-2000' />
                </a>
            </div>
        </div>
    </div>

    
  )
}
