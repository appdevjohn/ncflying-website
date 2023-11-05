import Link from 'next/link'

export default function MembershipInfo() {
  return (
    <>
      <section>
        <h1>Membership Info</h1>
        <h3>Owning the Sky Together</h3>
        <p>
          Welcome to the Triangle North Flying Club family! As a member,
          you&apos;re not just a participant; you&apos;re an integral part of a
          community dedicated to the love of flying. With ownership comes
          responsibility, and at Triangle North Flying Club, we believe in
          transparency and shared commitment.
        </p>
      </section>
      <section>
        <h3>Financial Structure</h3>
        <section>
          <h5>Pricing</h5>
          <p>
            <strong>Usage Fee:</strong> This will depend on the airplane you
            fly, but for our first airplane the cost is $95 per hobbs hour
            (dry). This fee covers the direct costs associated with the
            operation of our aircraft.
          </p>
          <p>
            <strong>Monthly Fee:</strong> $70. This fee helps support ongoing
            operational expenses and ensures the availability and maintenance of
            our aircraft.
          </p>
          <p>
            <strong>Buy In:</strong> $5000. This one-time payment secures your
            stake in the club and helps us aquire our fleet.
          </p>
        </section>
        <section>
          <h5>Ownership Stake</h5>
          <p>
            As a non-profit organization, we operate with a unique model. Every
            member of Triangle North Flying Club has an equal stake in the
            organization, giving you a say in important decisions and a share of
            the club&apos;s assets.
          </p>
        </section>
        <section>
          <h5>Shared Responsibilities</h5>
          <p>
            <strong>Emergency Fund:</strong> While we maintain an emergency fund
            in savings, unforeseen circumstances may require additional
            financial support. In such cases, members may be asked to contribute
            a one-time amount to address unexpected costs. This shared
            responsibility ensures the stability and longevity of our club.
          </p>
          <p>
            <strong>Voting Rights:</strong> All members have the right to
            participate in decision-making processes. From selecting club
            officers to approving major financial decisions, your voice matters.
          </p>
        </section>
      </section>
      <section>
        <h3>Not Just Rentals, But Ownership</h3>
        <p>
          It&apos;s essential to note that Triangle North Flying Club is not an
          airplane rental business. We are a community of aviation enthusiasts
          who collectively own and manage our fleet. This unique approach
          ensures that every member has a personal investment in the well-being
          of our aircraft and the success of our club.
        </p>
      </section>
      <section>
        <h3>Join the Adventure!</h3>
        <p>
          Ready to embark on this exciting journey with us? Becoming a member of
          Triangle North Flying Club is more than just a financial commitment;
          it&apos;s an investment in shared experiences, a love for flying, and
          a community of like-minded individuals.
        </p>
        <Link
          href='https://docs.google.com/forms/d/e/1FAIpQLSftCCKYJED0uNI2wM0yBJ-Y49xrT1dnoe_lIId8dNFtaD5L6w/viewform?usp=sf_link'
          target='_blank'
        >
          Apply to Join
        </Link>
      </section>
      <section>
        <h3>Have Questions?</h3>
        <p>
          If you have any questions or need clarification on our financial
          structure and responsibilities, feel free to contact us. We&apos;re
          here to assist you in every step of your aviation adventure.
        </p>
        <Link href='mailto:admin@ncflying.club'>Contact Us</Link>
      </section>
    </>
  )
}
