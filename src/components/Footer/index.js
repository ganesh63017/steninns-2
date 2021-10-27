import {Component} from 'react'
import {
  FaStepBackward,
  FaPlayCircle,
  FaStepForward,
  FaHeart,
} from 'react-icons/fa'
import {BiShuffle, BiRepeat, BiVolumeMute} from 'react-icons/bi'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <nav className="footer">
        <h1 className="card">hi</h1>
        <p className="pa">Nothings`s Playing</p>
        <FaStepBackward />
        <FaPlayCircle className="play" />
        <FaStepForward />
        <hr className="line" />
        <FaHeart className="icon" />
        <BiShuffle className="icon" />
        <BiRepeat className="icon" />
        <BiVolumeMute className="icon" />
      </nav>
    )
  }
}
export default Footer
