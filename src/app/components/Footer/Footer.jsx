import Link from 'next/link'
import CommanContainer from '../Container/Container'


export default function Footer() {
  return (
    <footer className='bg-footer-black p-4 mt-14'>
      <div className='w-full sm-padding'>
        <h1 className='py-3 font-sans not-italic font-bold text-justify leading-normal text-2xl'>Other no deposit casino bonus news</h1>
        <p className='font-sans not-italic text-white font-bold text-sm'>
          As a part of the Allfreechips no deposit casino bonus group, nodepositcasinoguide is dedicated to mainly giving you the latest no deposit bonuses directly without a bunch of filler garbage. Saucify offers a ton of no deposit casinos for USA along with RTG casinos. Microgaming is mainly delivering no deposit bonuses for Canada, while there are a giant group of software promoters for the rest of the world. If your in the UK then I’m sorry but your not smart enough to be trusted with a no deposit or free spin casino promo according to your elected officials.
        </p>
      </div>
      <div className='w-full'>
        <h1 className='pb-5 font-sans not-italic font-bold text-justify leading-normal text-2xl'>No Deposit Casino Guide</h1>
        <div className='sm-flex sm-footer w-full flex justify-between'>
          <div className='w-2/3 '>
            <ul className='flex justify-start items-center'>
              <li className='list-disc font-sans font-medium text-base'><Link className='pr-10' href="/">Privacy Policy</Link></li>
              <li className='list-disc font-sans font-medium text-base'><Link className='pr-10' href="/page/usa-casino">Casino By Software</Link></li>
              <li className='list-disc font-sans font-medium text-base'><Link href="/page/slots-by-software">Slots By Software</Link></li>
            </ul>
          </div>
          <div className='w-1/3 '>
            <ul className='flex sm-justify-center justify-end items-center'>
              <li className='font-sans text-xs border-r-2 pr-3'>&copy; 2020 All rights reserved</li>
              <li className='font-sans text-xs pl-3'>No Deposit Casino Guide </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}