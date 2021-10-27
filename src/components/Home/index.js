import {Component} from 'react'
import Cookies from 'js-cookie'

import {BsCircleFill} from 'react-icons/bs'
import {FaLessThan, FaGreaterThan} from 'react-icons/fa'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Released from '../Released'
import Featured from '../Featured'

import './index.css'

const l = [
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048512751f15ff6c8174e540b6fb4',
    width: 64,
    name: 'Moth To A Flame',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048516946deb6f548e464b385ee0e',
    width: 64,
    name: 'Blue Banisters',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d00004851f6eba81ea65968c148be0e47',
    width: 64,
    name: 'The Lockdown Sessions',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d00004851a2348f2b72a8f371c5304f05',
    width: 64,
    name: 'Nothing Feels Better',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048518ed0d66bd4f617ea8bcaba3d',
    width: 64,
    name: 'Folarin II',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048517699b7a2ed0c80811937ba5d',
    width: 64,
    name: 'Pa Mis Muchachas',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048511108c02dcf0daf4130d795d8',
    width: 64,
    name: 'So Icy Boyz',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048515d3f0c9813fbd472618124a3',
    width: 64,
    name: 'Not In The Mood',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048515f3793cb6bdd0b6ba418165c',
    width: 64,
    name: 'Taking Me Back',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048518a0ea241db21a86f6b5f1c0e',
    width: 64,
    name: 'Girl to Girl',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d0000485185a3521d7d368cbb6709cf27',
    width: 64,
    name: 'What A Song Can Do',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048519922f27cab942f36da3f909e',
    width: 64,
    name: 'SOMEBODY',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d00004851344cece62d0f5074814ead0e',
    width: 64,
    name: 'Rockland',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d00004851836db2f8371727a6da92977f',
    width: 64,
    name: 'Present',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d000048519922f27cab942f36da3f909e',
    width: 64,
    name: 'SOMEBODY',
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d0000485185a3521d7d368cbb6709cf27',
    width: 64,
    name: 'What A Song Can Do',
  },
]

const f = [
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f000000039d574d6f27a73e668fee93ef',
    width: null,
    name: "'90s Baby Makers",
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f00000003c601a6a746366286845b8fda',
    width: null,
    name: 'Deep Sleep',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f0000000331a916f4b108ce534f73caab',
    width: null,
    name: 'Late Night Vibes',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f00000003a6e2870c97bde5e2719c20b8',
    width: null,
    name: 'Dark & Stormy',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f000000035654f5615b2aec45465d0fd2',
    width: null,
    name: 'White Noise',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f00000003169d156ffeb451e54c4be47d',
    width: null,
    name: 'Soft Rock',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f00000003278197087524cc094f86e82b',
    width: null,
    name: 'Calm Down',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f00000003b70e0223f544b1faa2e95ed0',
    width: null,
    name: 'Sleep',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6',
    width: null,
    name: 'Peaceful Piano',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f0000000393fe06c436d719d3f31107d0',
    width: null,
    name: 'Night Rain',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f00000003cf8e264c6a92e245402ecb7a',
    width: null,
    name: 'Chill Hits',
  },
  {
    height: null,
    url: 'https://i.scdn.co/image/ab67706f0000000312cf5fd4624cce89f748ec99',
    width: null,
    name: 'Peaceful Meditation',
  },
]

const b = [
  {
    url:
      'https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg',
    width: 275,
    name: 'Top Lists',
  },
  {
    height: 274,
    url:
      'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
    width: 274,
    name: 'pop',
  },
  {
    height: 274,
    url: 'https://t.scdn.co/media/categories/jtracks_274x274.jpg',
    width: 274,
    name: 'J-トラック',
  },
  {
    height: 274,
    url:
      'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg',
    name: 'ポップ',
  },
  {
    height: 274,
    url:
      'https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg',
    width: 274,
    name: 'Mood',
  },
  {
    height: null,
    url: 'https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png',
    width: null,
    name: 'Early Noise',
  },
  {
    height: null,
    url: 'https://t.scdn.co/images/084155aeaa724ea1bd393a017d67b709',
    width: null,
    name: 'EQUAL',
  },
  {
    height: null,
    url: 'https://t.scdn.co/images/54841f7d6a774ef096477c99c23f0cf1.jpeg',
    width: null,
    name: 'アニメ',
  },
  {
    height: 274,
    url:
      'https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg',
    width: 274,
    name: 'ヒップホップ',
  },
  {
    height: 274,
    url:
      'https://t.scdn.co/media/derived/trending-274x274_7b238f7217985e79d3664f2734347b98_0_0_274_274.jpg',
    width: 274,
    name: 'トレンド',
  },
  {
    height: null,
    url: 'https://t.scdn.co/images/b611cf5145764c64b80e91ccd5f357c8',
    width: null,
    name: '年代別',
  },
  {
    height: null,
    url: 'https://t.scdn.co/images/9210c5a26e6a4b4da2c3ea8e5f87fff8',
    width: null,
    name: 'アンビエント',
  },
  {
    height: null,
    url: 'https://t.scdn.co/images/2078afd91e4d431eb19efc5bee5ab131.jpeg',
    width: null,
    name: 'K-pop',
  },
  {
    height: 274,
    url:
      'https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg',
    width: 274,
    name: 'edm_dance',
  },
  {
    height: 274,
    url:
      'https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg',
    width: 274,
    name: 'ロック',
  },
  {
    height: null,
    url: 'https://t.scdn.co/images/cad629fb65a14de4beddb38510e27cb1',
    width: null,
    name: 'Frequency',
  },
]

class Home extends Component {
  state = {
    releasedList: l,
    featuresList: f,
    browseList: b,
  }

  componentDidMount() {
    this.getReleasedLists()
    this.getFeaturedLists()
    this.getBrowseList()
  }

  getBrowseList = async () => {
    const apiUrl = 'https://api.spotify.com/v1/browse/categories'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer BQDGTdJF-4h9PyyOknP1aSEj_5SPx-7lpne-s47uFtSfc73cEY-0tu49KeQTCrGQh-g9di9lAxJBuJ4ewwDYA_V132mZOa5HzEM9WynC32olJbf0yVQ3HCm9saepdz_drClMryHYSSUrxsfEVxdmI_JM0W-HDadK9noSo3NxYBsbp5hX_fTgP0SFBJ-DlzklwtmnH4MUZ_IRel8csEMXHcFPfw4TsKr4lw`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
  }

  getFeaturedLists = async () => {
    const token = Cookies.get('jwt_token')
    const apiUrl = 'https://api.spotify.com/v1/browse/featured-playlists'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
  }

  getReleasedLists = async () => {
    const apiUrl = 'https://api.spotify.com/v1/browse/new-releases'
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer BQAzn1GHeVOT_KlvtRWlmS1WcLyFZ1oM3wijhO89Yjx6omcyJFW-ep57Mms1BJvdAC39F-am_Ce5g3aOSCLldJ_TI-rtlnR26sxVMyTNSWEO7ekUosW3gq2D2lxUD8RefZJhDs3gSn6baW2DiKtt4taEivIxY5_L3GfMbMQcC8bGXQBXy2oeBLAQqq9qLL3ZofNEgaj8XgF5LOCDS9NS2fwzOg6CxfQaQQ`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const token =
      'BQAzn1GHeVOT_KlvtRWlmS1WcLyFZ1oM3wijhO89Yjx6omcyJFW-ep57Mms1BJvdAC39F-am_Ce5g3aOSCLldJ_TI-rtlnR26sxVMyTNSWEO7ekUosW3gq2D2lxUD8RefZJhDs3gSn6baW2DiKtt4taEivIxY5_L3GfMbMQcC8bGXQBXy2oeBLAQqq9qLL3ZofNEgaj8XgF5LOCDS9NS2fwzOg6CxfQaQQ'
    Cookies.set('jwt_token', token, {expires: 60})
  }

  render() {
    const {releasedList, featuresList, browseList} = this.state

    return (
      <div className="home">
        <div>
          <BsCircleFill className="red" />
          <BsCircleFill className="yellow" />
          <BsCircleFill className="green" />
        </div>
        <div className="ui">
          <Sidebar />
          <div className="ui2">
            <div className="navbar">
              <Navbar />
            </div>
            <div className="ui3">
              <p className="line-box para">
                Released This Week <hr className="line" />
                <FaLessThan className="less-than" />
                <FaGreaterThan className="less-than" />
              </p>
              <ul className="songs">
                {releasedList.map(eachImage => (
                  <Released eachItem={eachImage} />
                ))}
              </ul>
              <p className="line-box para">
                FEATURED PLAYLIST <hr className="line" />
                <FaLessThan className="less-than" />
                <FaGreaterThan className="less-than" />
              </p>
              <ul className="songs">
                {featuresList.map(eachImage => (
                  <Featured eachItem={eachImage} />
                ))}
              </ul>
              <p className="line-box para">
                BROWSE <hr className="line" />
                <FaLessThan className="less-than" />
                <FaGreaterThan className="less-than" />
              </p>
              <ul className="songs">
                {browseList.map(eachImage => (
                  <Featured eachItem={eachImage} />
                ))}
              </ul>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
