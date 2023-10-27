import { FC, ReactNode } from 'react'
import Image from 'next/image'

interface AircraftComponentProps {
  imgSrc: string
  imgAlt?: string
  title: string
  price: string
  children: ReactNode
}

const Aircraft: FC<AircraftComponentProps> = ({
  imgSrc,
  imgAlt,
  title,
  price,
  children,
}) => (
  <section className='fleet-section'>
    <Image
      src={imgSrc}
      height={500}
      width={500}
      className='rounded inline'
      alt={imgAlt || title}
    />
    <div>
      <h3>
        {title} <span className='float-right text-sm'>{price}</span>
      </h3>
      {children}
    </div>
  </section>
)

export default Aircraft
