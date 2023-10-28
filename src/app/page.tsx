import Link from 'next/link'
import localFont from 'next/font/local'

const agbalumo = localFont({
  src: '../assets/agbalumo-regular.ttf',
  variable: '--font-agbalumo',
})

export default function Home() {
  return (
    <>
      <section>
        <h1 id='title' className={`${agbalumo.className} text-4xl sm:text-5xl`}>
          Triangle North Flying Club
        </h1>
        <h3>Where the Skies are Yours</h3>
        <p>
          At Triangle North, we&apos;re more than just a flying club; we&apos;re
          a community of aviation enthusiasts dedicated to making the joy of
          flying accessible and affordable. Our mission is simple: to provide
          pilots with the freedom to soar through the skies whenever they want,
          without the constraints of traditional clubs.
        </p>
      </section>
      <section>
        <h3>Your Passport to the Skies</h3>
        <p>
          <strong>Affordability:</strong> We believe that the sky should be open
          to everyone. Our commitment is to keep flying affordable, making it
          easier for pilots to indulge in their passion regularly.
        </p>
        <p>
          <strong>Accessibility:</strong> With our low airplane-to-pilot ratio,
          you&apos;ll find it easier than ever to book a plane whenever the
          aviation bug bites. No more waiting or complex scheduling; the skies
          are yours to conquer.
        </p>
        <p>
          <strong>Freedom to Explore:</strong> At Triangle North Flying Club, we
          value trust. Our rules are designed to give you the freedom to
          explore, try new things, and venture to places that other clubs might
          restrict. We trust our pilots to make the right decisions and enjoy
          the thrill of true aviation freedom.
        </p>
      </section>
      <section>
        <h3>Club Features</h3>
        <p>
          <strong>Easy Booking:</strong> Our booking system ensures that you can
          reserve a plane with just a few clicks. No hassle, no
          complications—just your ticket to the skies.
        </p>
        <p>
          <strong>Relaxed Rules:</strong> We believe in empowering our pilots.
          Our rules are designed to be flexible, giving you the space to
          experiment, learn, and push your boundaries. We trust you to make the
          most of your flying experience.
        </p>
        <p>
          <strong>Community Events:</strong> Join fellow aviation enthusiasts
          for regular club events, fly-ins, and social gatherings. Share your
          passion, swap stories, and make lasting connections with like-minded
          individuals.
        </p>
      </section>
      <section>
        <h3>Join the Club Today!</h3>
        <p>
          Ready to take flight with Triangle North Flying Club? Becoming a
          member is easy! Fill out our application and we will personally reach
          out to you.
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
          Have questions or need more information? Don&apos;t hesitate to
          contact us. We&apos;re here to help you navigate the skies with
          confidence.
        </p>
        <Link href='mailto:admin@ncflying.club'>Contact Us</Link>
      </section>
    </>
  )
}
