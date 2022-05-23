import masterCardLogo from '../assets/images/master-card.svg'
import visaCardLogo from '../assets/images/visa.png'

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
  let cardLogo = type === 'Visa' ? visaCardLogo : masterCardLogo

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="crad-logo">
        <img src={cardLogo} alt={type} />
      </div>
      <div className="card-number">{number.toString().slice(-4)}</div>
      <div className="date-bank">
        <span>
          {`Expires ${expirationMonth}/${expirationYear.toString().slice(-2)}`}
        </span>
        <span>{bank}</span>
      </div>
      <div className="card-owner">{owner}</div>
    </div>
  )
}

export default CreditCard