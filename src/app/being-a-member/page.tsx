import Link from 'next/link'

export default function BeingAMember() {
  return (
    <>
      <section>
        <h1>Being a Member</h1>
        <h3>A Community of Aviators</h3>
        <p>
          At Triangle North Flying Club, we believe that being a member is more
          than just joining a club; it&apos;s becoming part of a close-knit
          community of aviation enthusiasts who share your passion for the
          skies. As a member, you&apos;ll have various responsibilities and
          opportunities that make your journey with us truly special.
        </p>
      </section>

      <section>
        <h3>Financial Structure</h3>
        <p>
          <strong>Usage Rate:</strong> When you fly, there will be an hourly
          usage rate for each airplane. This fee allows us to maintain our fleet
          and provide top-notch service.
        </p>
        <p>
          <strong>Monthly Fee:</strong> Members contribute a monthly fee that
          helps cover fixed operational expenses, maintenance, and ensures the
          ongoing success of the club.
        </p>
        <p>
          <strong>Buy In Cost:</strong> As a member, you&apos;ll be required to
          make an initial buy in to secure your stake in the club. This
          investment demonstrates your commitment to our shared vision and
          allows us to acquire our fleet.
        </p>
        <p className='italic'>
          As we establish formal agreements, we&apos;ll be able to establish
          exact pricing for our members.
        </p>
      </section>
      <section>
        <h3>Participate in Decision-Making</h3>
        <p>
          <strong>Elections:</strong> Members have the opportunity to
          participate in club elections and vote for key leadership roles. Your
          voice matters in shaping the future of Triangle North Flying Club.
        </p>
        <p>
          <strong>Active Engagement:</strong> We encourage active engagement in
          club discussions and decisions. Your input helps us make informed
          choices that benefit the entire community.
        </p>
      </section>
      <section>
        <h3>Connect and Socialize</h3>
        <p>
          <strong>Club Events:</strong> We host a variety of club events, both
          aviation-related and social gatherings. It&apos;s a chance to connect
          with fellow members and share your love for flying.
        </p>
        <p>
          <strong>Community:</strong> Spend time with other club members, share
          stories, and build lasting friendships with individuals who share your
          passion for aviation.
        </p>
      </section>
      <section>
        <h3>Member-Owned</h3>
        <p>
          Being a member is not like a gym membership; you&apos;re becoming an
          equal owner in our non-profit organization. Having equal ownership
          means that every member holds an equal stake in the club&apos;s
          assets, direction, and decision-making processes. Your voice carries
          the same weight as any other member&apos;s when it comes to shaping
          the future of Trianlge North Flying Club. Having equal ownership means
          that every member holds an equal stake in the club&apos;s assets,
          direction, and decision-making processes. Your voice carries the same
          weight as any other member&apos;s when it comes to shaping the future
          of the club.
        </p>
      </section>
      <section>
        <h3>Join the Adventure!</h3>
        <p>
          Being a member of Triangle North Flying Club means being part of an
          exciting adventure. While we don&apos;t have specific pricing details
          available at this time, we want you to know that your financial
          commitment supports our shared goals and vision. It&apos;s an
          investment in an aviation community that values affordability,
          accessibility, and relaxed rules.
        </p>
        <p>
          Ready to embark on this journey with us? We invite you to become a
          part of Triangle North Flying Club and experience the thrill of being
          part of a vibrant aviation family.
        </p>
        <Link href='/join' target='_blank'>
          Apply to Join
        </Link>
      </section>
      <section>
        <h3>Have Questions?</h3>
        <p>
          If you have any questions or need more information about member
          responsibilities and what it&apos;s like to be a part of Trianlge
          North Flying Club, please don&apos;t hesitate to contact us.
          We&apos;re here to provide you with all the details you need.
        </p>
        <Link href='mailto:admin@ncflying.club'>Contact Us</Link>
      </section>
    </>
  )
}
