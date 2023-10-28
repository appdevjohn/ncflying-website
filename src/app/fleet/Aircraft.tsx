import { FC, ReactNode } from 'react'
import Image from 'next/image'

interface AircraftComponentProps {
  imgSrc: string
  imgAlt?: string
  tailNumber: string
  type: string
  price: string
  children: ReactNode
}

const Aircraft: FC<AircraftComponentProps> = ({
  imgSrc,
  imgAlt,
  tailNumber,
  type,
  price,
  children,
}) => (
  <section className='fleet-section'>
    <div>
      <div className='text-xl font-semibold sm:text-2xl'>
        {tailNumber} <span className='float-right text-sm'>{price}</span>
      </div>
      <div className='text-lg font-medium sm:text-xl'>{type}</div>
    </div>
    <Image
      src={imgSrc}
      height={500}
      width={500}
      className='rounded inline sm:row-span-2'
      alt={imgAlt || tailNumber}
    />
    <div>{children}</div>
  </section>
)

export default Aircraft
