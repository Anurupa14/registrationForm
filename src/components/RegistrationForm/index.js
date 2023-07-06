// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    last: '',
    isBlurFirstName: false,
    isBlurLastName: false,
    isFormSubmitted: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({isFormSubmitted: true})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isBlurFirstName: true})
    } else {
      this.setState({isBlurFirstName: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({isBlurLastName: true})
    } else {
      this.setState({isBlurLastName: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({first: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({last: event.target.value})
  }

  submitAgain = () => {
    this.setState({isFormSubmitted: false, first: '', last: ''})
  }

  render() {
    const {
      first,
      last,
      isBlurFirstName,
      isBlurLastName,
      isFormSubmitted,
    } = this.state
    return (
      <div className="formContainer">
        <h4>Registration</h4>
        {isFormSubmitted ? (
          <div className="successContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              type="button"
              onClick={this.submitAgain}
              className="submitAgain"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={this.onSubmitForm}>
            <label htmlFor="first">FIRST NAME</label>
            <input
              placeholder="First name"
              id="first"
              className="firstName"
              value={first}
              onBlur={this.onBlurFirstName}
              onChange={this.onChangeFirstName}
              required
            />
            {isBlurFirstName ? <p className="redText">Required</p> : ''}

            <label htmlFor="last"> LAST NAME</label>
            <input
              placeholder="Last name"
              id="last"
              className="lastName"
              value={last}
              onBlur={this.onBlurLastName}
              onChange={this.onChangeLastName}
              required
            />
            {isBlurLastName ? <p className="redText">Required</p> : ''}
            <div className="btnContainer">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
