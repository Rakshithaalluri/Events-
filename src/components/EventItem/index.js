// Write your code here

import './index.css'

const EventItem = props => {
  const {itemDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = itemDetails

  const eventImageClass = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <>
      <li className="each-item-container">
        <button type="button" className="image-button" onClick={onClickEvent}>
          <img src={imageUrl} alt="event" className={eventImageClass} />
        </button>

        <p className="event-name-heading"> {name} </p>
        <p className="event-location"> {location} </p>
      </li>
    </>
  )
}
export default EventItem
