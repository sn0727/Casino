import CommanContainer from "@/app/components/Container/Container";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";

export default function Bitcoin() {
  return (
    <CommanContainer>
<<<<<<< HEAD
      <div className='w-full custome-h overflow-x-auto pb-0 p-4 bgImage'>
=======
      <div className='w-full custome-h overflow-x-auto p-4 bgImage pb-0'>
>>>>>>> cdd869eed5e18edb7be3d0edf322c1a16d39256f
        <div className='bgBlur mb-14'>
          <p className='p-3 font-sans not-italic font-bold text-justify leading-normal text-sm md:text-sm lg:md:text-sm lg:text-sm xl:text-xl xm:text-2xl'>
            Welcome to the No Deposit Casino Guide delivering the latest No Deposit casino bonuses and codes. Being in the industry sionce 2004 we have a great relation with all casinos listed here and can promote them with confidence. Please feel free to comment on our daily casino bonuses as well and any reviews we have here as your input is important.
          </p>
        </div>
        {/* 01 row data */}
        {
          [1, 2, 3, 4, 5].map((index) => (
            <div className='bgBlur mb-14 p-4 custom-hover' key={index}>
              <div className='sm-flex flex items-center justify-center'>
                <div className='w-1/4 flex items-center justify-center flex-col'>
                  <Image width={240} height={100} src="/assets/casino/casino_02.png" className='w-fulls' alt="" />
                  <h1 className='font-sans not-italic text-white font-bold leading-normal text-sm md:text-sm lg:text-sm xl:text-xl text-center'>Bitcoin Casino Extreme Review</h1>
                </div>
                <div className='w-1/4'>
                  <div className='text-center'>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-sm md:text-sm lg:text-sm xl:text-xl'>No Deposit Bonus</div>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-sm md:text-sm lg:text-sm xl:text-xl'>$30</div>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-sm md:text-sm lg:text-sm xl:text-xl'>Deposit Bonus</div>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-sm md:text-sm lg:text-sm xl:text-xl'>200</div>
                  </div>
                </div>
                <div className='w-1/4'>
                  <div className='flex items-center justify-center'>
                    <div className='mr-5 font-sans not-italic text-white font-bold leading-normal text-sm md:text-sm lg:text-sm xl:text-xl'>Powered By</div>
                    <div className='font-sans not-italic text-white font-black leading-normal text-sm md:text-sm lg:text-sm xl:text-xl'>RTG</div>
                  </div>
                </div>
                <div className='w-1/4'>
                  <div className='flex items-center justify-center flex-col'>
                    <div className='font-sans not-italic text-white font-bold leading-normal text-sm md:text-sm lg:text-sm xl:text-xl mb-2'>Playthrought <b className='underline'>30x</b></div>
                    <button className='bg-button-blue text-white mb-2 font-bold py-2 px-10 md:text-sm lg:text-sm xl:text-xl tracking-widest'>Play Now</button>
                    <button className='bg-button-white text-button-blue font-bold py-2 px-6 md:text-sm lg:text-sm xl:text-xl tracking-widest'>Review</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
<<<<<<< HEAD
=======

>>>>>>> cdd869eed5e18edb7be3d0edf322c1a16d39256f
        {/* spaceing div */}
        <div className='mb-14'></div>
        <Footer />
      </div>
    </CommanContainer>
  )
}