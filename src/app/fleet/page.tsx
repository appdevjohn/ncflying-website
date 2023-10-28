import Link from 'next/link'
import Aircraft from './Aircraft'

export default function Fleet() {
  return (
    <>
      <section>
        <h1>Our Fleet</h1>
        <p>
          Discover the joy of flying with our versatile Cessna 172. At Triangle
          North Flying Club, we start with a classic, the Cessna 172, and plan
          to expand our offerings to provide more opportunities for adventure.
        </p>
      </section>
      <section>
        <Aircraft
          tailNumber='N3816Q'
          type='Cessna 172'
          price='$95/hour'
          imgSrc='/N3816Q.jpeg'
        >
          <p>
            <strong>Reliability:</strong> The Cessna 172 is a time-tested and
            reliable aircraft, perfect for both beginners and seasoned pilots.
          </p>
          <p>
            <strong>Versatility:</strong> From scenic flights to training
            sessions, the Cessna 172 is well-suited for a variety of flying
            experiences.
          </p>
          <p>
            <strong>Comfort:</strong> Enjoy a spacious and comfortable cockpit,
            making your time in the air a truly enjoyable experience.
          </p>
          <p className='italic text-xs'>
            This airplane is not affiliated with Triangle North Flying Club. It
            is only here for development purposes.
          </p>
        </Aircraft>
      </section>
      <section>
        <h3>Choosing Your Adventure</h3>
        <p>
          While we currently feature one Cessna 172, stay tuned for the
          expansion of our fleet with more of these reliable and versatile
          aircraft. Join Triangle North Flying Club and be part of the exciting
          journey as we grow and offer more opportunities for you to take to the
          skies.
        </p>
        <Link
          href='https://docs.google.com/forms/d/e/1FAIpQLSftCCKYJED0uNI2wM0yBJ-Y49xrT1dnoe_lIId8dNFtaD5L6w/viewform?usp=sf_link'
          target='_blank'
        >
          Apply to Join
        </Link>
      </section>
      <section>
        <h3>Questions?</h3>
        <p>
          If you have any inquiries about our current aircraft or want to learn
          more about our plans for expanding the fleet, contact us. We&apos;re
          here to assist you in making the most of your flying experience.
        </p>
        <Link href='mailto:admin@ncflying.club'>Contact Us</Link>
      </section>
    </>
  )
}
