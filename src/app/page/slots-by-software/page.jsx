import CommanContainer from "@/app/components/Container/Container";

export default function SlotBySoftware() {
  return (
    <CommanContainer>
      <div className='w-full custome-h overflow-x-auto p-4 bgImage'>
        <div className='bgBlur mb-14'>
          <p className='p-3 font-sans not-italic font-bold text-justify leading-normal text-2xl'>
            Welcome to the No Deposit Casino Guide delivering the latest No Deposit casino bonuses and codes. Being in the industry sionce 2004 we have a great relation with all casinos listed here and can promote them with confidence. Please feel free to comment on our daily casino bonuses as well and any reviews we have here as your input is important.
          </p>
        </div>
        {/* 01 row data */}
        {
          [1, 2, 3, 4, 5].map(() => (
            <div className='bgBlur mb-14 p-4 custom-hover'>
              <div className='flex items-center justify-center'>
                <div className='w-1/4 flex items-center justify-center flex-col'>
                  <img src="/assets/casino/casino_03.png" className='w-fulls' alt="" />
                  <div className='w-5/6 flex items-center justify-between'>
                    <div className='mr-5 font-sans not-italic text-white font-bold leading-normal text-xl'>Powered By</div>
                    <div className='font-sans not-italic text-white font-black leading-normal text-xl'>RTG</div>
                  </div>
                </div>
                <div className='w-1/4'>
                  <div className='text-center'>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-4xl'>Firestorm</div>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>Game Line</div>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>25</div>
                  </div>
                </div>
                <div className='w-1/4'>
                  <div className='text-center'>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>
                      <div className="flex justify-center">
                        {
                          [1, 2, 3, 4].map(() => (

                            <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>

                          ))
                        }
                        <p className="font-sans mb-2 not-italic font-600 text-white text-justify text-xl">4.5</p>
                      </div>
                    </div>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>Game Reel</div>
                    <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>5</div>
                  </div>
                </div>
                <div className='w-1/4'>
                  <div className='flex items-center justify-center flex-col'>
                    <button className='bg-button-blue text-white mb-2 font-bold py-2 px-10 text-md tracking-widest'>Play Now</button>
                    <button className='bg-button-white text-button-blue font-bold py-2 px-6 text-md tracking-widest'>Review</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        {/* 02 text box */}
        <div className='bgBlur mb-14 p-3'>
          <h1 className='text-2xl font-bold mb-10 text-left'>Welcome to the No Deposit Casino Guide delivering</h1>
          <p className='font-sans mb-10 not-italic font-600 text-justify text-xl'>
            Welcome to the No Deposit Casino Guide delivering the latest No Deposit casino bonuses and codes. Being in the industry sionce 2004 we have a great relation with all casinos listed here and can promote them with confidence. Please feel free to comment on our daily casino bonuses as well and any reviews we have here as your input is important.
          </p>
          <h1 className='text-2xl font-bold text-left'>Welcome to the No Deposit Casino Guide delivering</h1>
        </div>
        {/* 03 card row data */}
        <div className='flex items-center justify-start custom-body flex-wrap gap-5'>
          {
            [1, 2, 3, 4, 5, 6].map(() => (
              <div className='w-1/4 bgBlur custom-card  p-3 text-center custom-hover'>
                <img src="/assets/casino/casino_03.png" className='mx-auto m:auto' alt="" />
                <h1 className='font-sans my-3 not-italic text-black font-bold text-xl'> FireStorm </h1>
                <div className="flex justify-center">
                  {
                    [1, 2, 3, 4].map(() => (

                      <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>

                    ))
                  }
                  <p className="font-sans mb-2 not-italic font-600 text-white text-justify text-xl">4.5</p>
                </div>

                <div>
                  <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>Game Line</div>
                  <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>25</div>
                </div>
                <div>
                  <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>Game Reel</div>
                  <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>5</div>
                </div>
                <div>
                  <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>Powered By</div>
                  <div className='mb-2 font-sans not-italic text-white font-bold leading-normal text-xl'>RTG</div>
                </div>
                <h1 className='font-sans my-3  not-italic text-black font-bold text-xl underline'>Review</h1>
                <button className='bg-button-blue text-white mb-2 font-bold py-2 px-10 text-md tracking-widest'>Play Now</button>
              </div>
            ))
          }
        </div>
        {/* spaceing div */}
        <div className='mb-14'></div>
        {/* 04 row data */}
      </div>
      <div className='w-full'>
        <h1 className='py-3 font-sans not-italic font-bold text-justify leading-normal text-2xl'>Other no deposit casino bonus news</h1>
        <p className='font-sans not-italic text-white font-bold text-sm'>
          As a part of the Allfreechips no deposit casino bonus group, nodepositcasinoguide is dedicated to mainly giving you the latest no deposit bonuses directly without a bunch of filler garbage. Saucify offers a ton of no deposit casinos for USA along with RTG casinos. Microgaming is mainly delivering no deposit bonuses for Canada, while there are a giant group of software promoters for the rest of the world. If your in the UK then I’m sorry but your not smart enough to be trusted with a no deposit or free spin casino promo according to your elected officials.
        </p>
      </div>
    </CommanContainer>
  )
}