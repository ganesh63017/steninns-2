import {Component} from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import {GiMoonBats} from 'react-icons/gi'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <GiMoonBats className="react" />
        <div className="matter">
          <h1>Your favourite tunes</h1>
          <div>
            <h1>
              All <FaSun className="sun" /> and all <FaMoon className="moon" />
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
export default Navbar
