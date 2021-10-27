import {Component} from 'react'
import {CgProfile} from 'react-icons/cg'
import {FaHeadphonesAlt, FaHeart, FaPlayCircle} from 'react-icons/fa'
import {BiSearchAlt2} from 'react-icons/bi'
import {RiBarChartHorizontalLine} from 'react-icons/ri'

import './index.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="profile-box">
          <CgProfile className="profile" />
          <p>Bob Smith</p>
        </div>
        <div className="items">
          <div className="active">
            <FaHeadphonesAlt />
            <p>Discover</p>
          </div>
          <div className="item-box">
            <BiSearchAlt2 />
            <p>Search</p>
          </div>
          <div className="item-box">
            <FaHeart />
            <p>Favorites</p>
          </div>
          <div className="item-box">
            <FaPlayCircle />
            <p>Playlists</p>
          </div>
          <div className="item-box">
            <RiBarChartHorizontalLine />
            <p>Charts</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Sidebar
