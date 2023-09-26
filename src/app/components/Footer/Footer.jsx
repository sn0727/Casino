import Link from 'next/link'
import CommanContainer from '../Container/Container'


export default function Footer() {
  return (
    <footer className='bg-footer-color p-4 mt-14'>
      <CommanContainer>
        <div className='w-full'>
          <h1 className='pb-5 font-sans not-italic font-bold text-justify leading-normal text-2xl'>No Deposit Casino Guide</h1>
          <div className='w-full flex justify-between'>
            <div className='w-2/3 '>
              <ul className='flex justify-start items-center'>
                <li className='list-disc font-sans font-medium text-base'><Link className='pr-10' href="/">Privacy Policy</Link></li>
                <li className='list-disc font-sans font-medium text-base'><Link className='pr-10' href="/page/usa-casino">Casino By Software</Link></li>
                <li className='list-disc font-sans font-medium text-base'><Link href="/page/slots-by-software">Slots By Software</Link></li>
              </ul>
            </div>
            <div className='w-1/3 '>
              <ul className='flex justify-end items-center'>
                <li className='font-sans text-xs border-r-2 pr-3'>&copy; 2020 All rights reserved</li>
                <li className='font-sans text-xs pl-3'>No Deposit Casino Guide </li>
              </ul>
            </div>
          </div>
        </div>
      </CommanContainer>
    </footer>
  )
}