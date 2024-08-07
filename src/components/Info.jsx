import profilePhoto from '../assets/profile.png'
import emailIcon from '../assets/email.svg'
function Info() {
  return (
    <div>
      <img className='profile' src={profilePhoto} alt="profile photo" />
      <div className="info-txt container">
        <h1>Adam Smith</h1>
        <h2>Frontend Developer</h2>
        <a href='https://adamsmith.website' target='_blank'>adamsmith.website</a>
      <button>
        <img src={emailIcon} alt="" />
        <p>Email</p>
      </button>
      </div>

    </div>
  )
}

export default Info
