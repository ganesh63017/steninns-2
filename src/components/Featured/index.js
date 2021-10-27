import './index.css'

const Featured = props => {
  const {eachItem} = props
  const {url, name} = eachItem
  return (
    <li className="list">
      <img src={url} alt={name} className="f-img" />
      <p>{name}</p>
    </li>
  )
}
export default Featured
