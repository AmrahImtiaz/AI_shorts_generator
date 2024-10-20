import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
// import { Sign } from 'crypto'

export default function Page() {
  return (
    <div className='grid grid-cols1 md:grid-cols-2' >
    <div>
      <Image src={'/login.png'} alt="Login" width={500} height={500}
      className='w-full object-contain'
      />
    </div>
    <div className='flex justify-center items-center h-screen'>
    <SignIn/>
    </div>
    </div>
  )
}