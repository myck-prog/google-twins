import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core"
//41:59
function Home() {
  return (
    <div className='home'>
  

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/* Link */}
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
         <AppsIcon />
         <Avatar />
        </div>
      </div>

      <div className="home__body">

      </div>

    </div>
  )
}
export default Home