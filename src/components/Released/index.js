import './index.css'

const Released = props => {
  const {eachItem} = props
  const {url, name} = eachItem
  return (
    <li className="list">
      <img src={url} alt={name} className="img" />
      <p>{name}</p>
    </li>
  )
}
export default Released
