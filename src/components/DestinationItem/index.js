import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem
  return (
    <li className="user-card-container">
      <img src={imgUrl} className="profile-pic" alt={name} />
      <div>
        <p>{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
