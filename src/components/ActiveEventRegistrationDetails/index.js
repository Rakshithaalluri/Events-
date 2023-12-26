// Write your code here

import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNotActiveEvent = () => (
    <p className="view-content">
      {' '}
      Click on an event, to view its registration details{' '}
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="view-registration-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-image"
      />
      <h1 className="closed-heading"> Registrations Are Closed Now! </h1>
      <p className="closed-text">
        {' '}
        Stay tuned. We will reopen the registration soon!{' '}
      </p>
    </div>
  )

  const yetToRegisterView = () => (
    <div className="view-registration-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-text">
        {' '}
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with beautiful
        art form.
      </p>
      <button className="register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="view-registration-details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return yetToRegisterView()
      case registrationStatus.registered:
        return registeredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNotActiveEvent()
    }
  }

  return (
    <div className="render-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
