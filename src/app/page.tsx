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
        <h3>Aspiring for the Skies</h3>
        <p>
          At Triangle North, we&apos;re more than just a flying club; we&apos;re
          a community of aviation enthusiasts dedicated to making the joy of
          flying accessible and affordable. Our mission is simple: to provide
          pilots with the freedom to soar through the skies whenever they want,
          without the constraints of traditional clubs. While we&apos;re in the
          early stages of development and not yet operational, we&apos;re
          passionate about creating an aviation community where members can
          explore the skies affordably and freely.
        </p>
      </section>
      <section>
        <h3>Our Pledge</h3>
        <p>
          <strong>Affordability:</strong> We believe that the sky should be open
          to everyone. Our commitment is to keep flying affordable, making it
          easier for pilots to indulge in their passion regularly.
        </p>
        <p>
          <strong>Accessibility:</strong> We&apos;ll aim to ensure that aircraft
          are readily available when you&apos;re ready to fly, so you&apos;ll
          find it easier than ever to book a plane whenever the aviation bug
          bites.
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
          <strong>Easy Booking:</strong> Our booking system will ensure that you
          can reserve a plane with just a few clicks. No hassle, no
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
        <p>
          <strong>Ownership:</strong> Become an equal owner in our non-profit
          organization, sharing a stake in our assets and decision-making. Your
          voice matters, and together, we shape the future of our aviation
          community.
        </p>
      </section>
      <section>
        <h3>Fleet</h3>
        <p>
          While Triangle North Flying Club currently doesn&apos;t have aircraft,
          we&apos;re diligently preparing to introduce a diverse fleet featuring
          accessible and cost-effective options like Cessna 172s and Piper
          Cherokees. These airplanes don&apos;t require any special ratings or
          endorsements, so any private pilot can jump right in. Our commitment
          to full ownership and willingness to explore leaseback arrangements
          ensures that our aircraft remain readily available to members,
          supporting our vision of affordability and accessibility in aviation.
        </p>
      </section>
      <section>
        <h3>Join the Journey</h3>
        <p>
          We&apos;re in the process of laying the groundwork for an incredible
          flying club experience. While we don&apos;t have aircraft or
          agreements with the airport just yet, we invite you to be a part of
          our journey from the very beginning.
        </p>
        <Link href='/join' target='_blank'>
          Apply to Join
        </Link>
      </section>
      <section>
        <h3>Questions?</h3>
        <p>
          If you have any questions or want more information about our
          club&apos;s development, please don&apos;t hesitate to contact us.
          We&apos;re here to provide you with the latest updates and answer any
          inquiries you may have.
        </p>
        <Link href='mailto:admin@ncflying.club'>Contact Us</Link>
      </section>
    </>
  )
}
