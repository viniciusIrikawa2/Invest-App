import Image from "next/image";

export default function Home() {
  return (
    <main className="flex md:flex-row flex-col items-center h-[80vh]"> 
      <div className="flex flex-col items-center justify-center md:w-1/2 md:ml-10 ml-5 mt-20 md:mb-0 mb-20 md:-translate-y-20">
        <h1 className="text-4xl font-bold text-in-white"> Your platform to easily <span className='text-in-green text-4xl font-bold'>IN</span>vest<span className='text-in-green'>!</span></h1>
        <p className="text-in-white md:w-[70%] mt-3 text-xl">Invest simply, without bureaucracy, and with any amount. The intuitive platform simplifies the investor's life, <span className="text-in-green font-bold">invest now!</span></p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image src='/finance-vector.png' alt="Finance vector" height={100} width={500}/>
      </div>
    </main>
  );
}
