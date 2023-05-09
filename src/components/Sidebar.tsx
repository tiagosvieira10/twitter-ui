import twitterLogo from '../assets/logo-twitter.svg'
import {Hash, Bell, Envelope, DotsThreeCircle, FileText, User, BookmarkSimple, House} from 'phosphor-react'

import './Sidebar.css'

export function Sidebar (){

    return(

    <aside className='sidebar'>
    <img className='logo' src={twitterLogo} alt="logo" />

    <nav className='main-navigation'>
      <a  className='ativo' href="">
        <House weight='fill'/>
        Home
      </a>
      <a href="">
        <Hash/> 
        Explorer
      </a>
      <a href="">
       <Bell/> 
        Notifications
      </a>
      <a href="">
        <Envelope/>
        Messages
      </a>
      <a href="">
        <BookmarkSimple/>
        Bookmarks
      </a>
      <a href="">
        <FileText/>
        List
      </a>
      <a href="">
        <User/>
        Profile
      </a>
      <a href="">
       <DotsThreeCircle/>
        More
      </a>
    </nav>

    <button className='new-tweet'>Tweet</button>
  </aside>
    )
}