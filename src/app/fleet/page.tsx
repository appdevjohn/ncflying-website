import Aircraft from './Aircraft'

export default function Fleet() {
  return (
    <>
      <Aircraft
        title='Cessna 172 - N3816Q'
        price='$95/hour'
        imgSrc='/N3816Q.jpeg'
      >
        <ul>
          <li>Two G5's</li>
          <li>Garmin 650</li>
          <li>Useful Load: 817 lbs</li>
        </ul>
      </Aircraft>
    </>
  )
}
