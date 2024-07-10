import Link from 'next/link';
import React from 'react';

const MysteryComponent = () => {
  return (
    <div className='w-[50px] h-[50px] bg-green-400 border-4 border-green-300 rounded-full flex items-center justify-center fixed bottom-10 right-10 cursor-pointer'>
        <Link target='_blank' 
              href='https://api.whatsapp.com/send?phone=+5579988545007&text=Fala%20Vinícius,%20gostei%20do%20seu%20projeto!'>
            <span className='text-[#212121] text-xl font-bold'>?</span>
        </Link>
    </div>
  )
}

export default MysteryComponent;