import { Outlet, Link } from "react-router-dom";
import logo from './logo.png';
import './Layout.css';
import { Avatar } from "@mui/material";

const Layout = () => {

  // const countdownString = fetch("https://bricasso.pythonanywhere.com/countdown")
  // .then(rawString => {
  //     let parts = rawString.split("-");
  //     const daysUntil = parts[0]
  //     const hoursUntil = parts[1];
  //     const minsUntil = parts[2];

  //     return `${daysUntil}d, ${hoursUntil}h, ${minsUntil}m until next visit :)`
  // }).catch(error => {
  //   return null;
  // })
  return (
    <div>
      <header className="app-header">
        <a href="/"><img src={logo} className="header-logo"></img></a>
        <nav className="header-content">
          <Link className="header-link" to="/wishes">Wishes</Link>
          <Link className="header-link" to="/travel">Travel</Link>
          <Link className="header-link" to="/dates">Dates</Link>
        </nav>
        {/* <span>{countdownString}</span> */}
        <div className="profile">
          <Avatar>H</Avatar>
        </div>
      </header>

      <Outlet />
      
    </div>
  )
};

export default Layout;