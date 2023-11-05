import Link from 'next/link'

export default function FAQ() {
  return (
    <>
      <section>
        <h1>Frequently Asked Questions</h1>
        <p>
          Welcome to the Triangle North Flying Club FAQ page. Here, we address
          common questions to provide you with all the information you need to
          become a part of our aviation community.
        </p>
      </section>
      <section>
        <h5>How do I become a member of the club?</h5>
        <p>
          To become a member of Triangle North Flying Club, simply fill out our
          membership form. We&apos;ll get back to you soon thereafter and guide
          you through the necessary steps to join our aviation family.
        </p>
        <Link
          href='https://docs.google.com/forms/d/e/1FAIpQLSftCCKYJED0uNI2wM0yBJ-Y49xrT1dnoe_lIId8dNFtaD5L6w/viewform?usp=sf_link'
          target='_blank'
        >
          Apply to Join
        </Link>
      </section>
      <section>
        <h5>What are the membership fees, and what do they cover?</h5>
        <p>The membership fees for the club are as follows:</p>
        <p>
          <strong>Usage Fee:</strong> This will depend on the airplane you want
          to fly, but for the airplane we&apos;re starting with, the cost will
          be $95 per hobbs hour (dry).
        </p>
        <p>
          <strong>Monthly Fee:</strong> $70.
        </p>
        <p>
          <strong>Buy In:</strong> $5000.
        </p>
        <p>
          These fees cover operational costs, maintenance, and contribute to the
          club&apos;s overall sustainability. You can learn more about it on our
          Membership Info page.
        </p>
        <Link href='/membership-info'>Membership Info</Link>
      </section>
      <section>
        <h5>Can I join if I don&apos;t have a pilot&apos;s license?</h5>
        <p>
          No, you must have at least a private pilot certificate to be a member
          of the club. However, you can pursue your private pilot certificate
          with Total Flight Solutions right there at the airport.
        </p>
      </section>
      <section>
        <h5>How does the aircraft booking system work?</h5>
        <p>
          Booking an aircraft with Triangle North Flying Club is easy. Simply
          log in to your member account on PreFlight, our airplane booking
          system. From there, you&apos;ll be able to reserve the airplane, pay
          usage fees, and more.
        </p>
      </section>
      <section>
        <h5>Are there any restrictions on where I can fly?</h5>
        <p>
          While there are no geographical restrictions on your flights, we
          encourage responsible and safe flying practices. Please adhere to all
          airspace regulations and guidelines provided by the FAA.
        </p>
      </section>
      <section>
        <h5>
          What makes Triangle North Flying Club different from other flying
          clubs?
        </h5>
        <p>
          Triangle North Flying Club stands out for its commitment to
          affordability, trust in our members, and the unique ownership stake
          each member holds. Our relaxed rules and emphasis on community make us
          a distinctive and welcoming flying club.
        </p>
      </section>
      <section>
        <h5>How often can I expect the aircraft to be available?</h5>
        <p>
          We maintain a low airplane-to-pilot ratio to ensure that our aircraft
          are generally available when you want to fly. This approach maximizes
          your access to our fleet, allowing for greater flexibility in your
          flying schedule.
        </p>
      </section>
      <section>
        <h5>What happens in case of maintenance issues or emergencies?</h5>
        <p>
          In the event of maintenance issues or emergencies, Triangle North
          Flying Club has established procedures in place to address such
          situations promptly. Members may be notified of temporary
          unavailability due to maintenance, and our emergency fund is in place
          to cover unforeseen costs.
        </p>
      </section>
      <section>
        <h5>Can I bring guests when flying?</h5>
        <p>
          Yes, you can bring guests when flying with Triangle North Flying Club.
          However, please ensure that they adhere to all safety guidelines.
        </p>
      </section>
      <section>
        <h5>Is there a minimum flying hour requirement?</h5>
        <p>
          There is no specific minimum flying hour requirement at Triangle North
          Flying Club. We encourage our members to fly at their own pace and
          enjoy the experience without pressure.
        </p>
      </section>
      <section>
        <h5>How are club decisions made, and can members be involved?</h5>
        <p>
          Club decisions are made through a collaborative process spelled out in
          our bylaws. Members have the opportunity to participate in important
          decisions through voting on significant matters, ensuring that the
          club&apos;s direction reflects the collective interests of its
          members.
        </p>
      </section>
      <section>
        <h5>What happens if I want to leave the club?</h5>
        <p>
          Members looking to resign must sell their share to the next individual
          on the club&apos;s waitlist. During this transitional period,
          resigning members will continue to be responsible for paying monthly
          fees until their stake is successfully transferred to a new member.
          This process is described clearly in our bylaws.
        </p>
      </section>
      <section>
        <h3>Have more questions?</h3>
        <p>
          If you have additional questions or need clarification on any topic,
          feel free to contact us. We&apos;re here to assist you in every step
          of your aviation adventure.
        </p>
        <Link href='mailto:admin@ncflying.club'>Contact Us</Link>
      </section>
    </>
  )
}
