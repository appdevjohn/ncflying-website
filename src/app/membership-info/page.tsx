export default function Fleet() {
  return (
    <>
      <section>
        <h3>Club Membership</h3>
        <p>
          Triangle North Flying Club is an equitable non-profit organization.
          Our airplanes are flown exclusively by our members.
        </p>
      </section>
      <section>
        <h3>Pricing</h3>
        <div className='py-2'>
          <h5>Hourly Cost - $95/hour dry</h5>
          <p>
            The hourly cost represents only the wear and tear on the airplane.
          </p>
        </div>
        <div className='py-2'>
          <h5>Monthly Fee - $70/month</h5>
          <p>
            Our monthly fee pays for the fixed costs of the club. These include
            the cost of insurance, tie-down spots, and other monthly expenses.
          </p>
        </div>
        <div className='py-2'>
          <h5>Buy-In - $5000</h5>
          <p>
            As we gain new members, we need to aquire more airplanes to maintain
            our member-to-airplane ratio of 10 people per airplane. The buy-in
            cost contributes to the aquisistion of an additional club airplane.
          </p>
        </div>
      </section>
      <section>
        <h3>What is it like being a member?</h3>
        <ul className='list-disc'>
          <li>24-hour access to the airplanes</li>
          <li>Online scheduling</li>
          <li>Flight instruction through Total Flight Solutions</li>
          <li>Monthly club meetings</li>
          <li>Low airplane-to-member ratio of 10:1</li>
        </ul>
      </section>
    </>
  )
}
