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
        <Link href='/join' target='_blank'>
          Apply to Join
        </Link>
      </section>
      <section>
        <h5>What are the membership fees, and what do they cover?</h5>
        <p>
          Membership fees include a buy-in cost to secure your stake in the
          club, a monthly fee, and an hourly usage rate. Specific pricing
          details will be provided as we approach club operations.
        </p>
        <Link href='/being-a-member'>Membership Info</Link>
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
        <h5>Will the club provide flight training or other services?</h5>
        <p>
          No, we will not be providing flight training or other services. But,
          you can train with CFIs who are not affiliated with the club in club
          aircraft.
        </p>
      </section>
      <section>
        <h5>How does the aircraft booking system work?</h5>
        <p>
          Booking an aircraft with Triangle North Flying Club will be done with
          PreFlight, an airplane reservation app made right here in the
          Triangle. From there, you&apos;ll be able to reserve the airplane, pay
          usage fees, and more. We aim to keep booking accessible with minimal
          restrictions, ensuring convenient access to our fleet.
        </p>
      </section>
      <section>
        <h5>Will there be any restrictions on where I can fly?</h5>
        <p>
          While there will be no geographical restrictions on your flights, we
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
          each member holds. We prioritize creating a welcoming community where
          members can explore aviation without unnecessary restrictions.
        </p>
      </section>
      <section>
        <h5>How often can I expect the aircraft to be available?</h5>
        <p>
          We&apos;re committed to maintaining a low airplane-to-pilot ratio to
          ensure that our aircraft are generally available when you want to fly.
          Members can expect convenient access to aircraft for their flying
          adventures.
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
          Members have the opportunity to participate in club decisions through
          elections and active engagement in discussions. Participation in club
          events and gatherings is also encouraged.
        </p>
      </section>
      <section>
        <h5>What kind of entity is the club?</h5>
        <p>
          Triangle North Flying Club is presently incorporated as a 501(c)(7)
          non-profit corporation.
        </p>
      </section>
      <section>
        <h5>What happens if I want to leave the club?</h5>
        <p>
          Members looking to resign must sell their share to the next individual
          on the club&apos;s waitlist. During this transitional period,
          resigning members will continue to be responsible for paying monthly
          fees until their stake is successfully transferred to a new member.
          This process is described in our bylaws.
        </p>
      </section>
      <section>
        <h3>Have more questions?</h3>
        <p>
          If you have additional questions or need clarification on any topic,
          feel free to contact us. We&apos;re here to answer any questions you
          may have.
        </p>
        <Link href='mailto:admin@ncflying.club'>Contact Us</Link>
      </section>
    </>
  )
}
