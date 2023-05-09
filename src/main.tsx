import React from 'react'
import ReactDOM from 'react-dom/client' 
import {Hash, Bell, Envelope, DotsThreeCircle, FileText, User, BookmarkSimple,Sparkle, House} from 'phosphor-react'

import './global.css'

import twitterLogo from './assets/logo-twitter.svg'
import { Tweet } from './components/Tweet'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <div className='layout'>

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

    <div className='content'>
      <main className='timeline'>
        <div className="timeline-header">
          Home 
          <Sparkle/>
        </div>

        <form className='new-tweet-form'>

          <label htmlFor="tweet">
            <img src="https://github.com/tiagosvieira10.png" alt="Tiago Vieira" />
            <textarea id="tweet" placeholder="O que está acontecendo?"></textarea>
          </label>

          <button type='submit'>Tweet</button>
        </form>

        <div className="separator"/>

        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>

      </main>
    </div>
      
   </div>
  </React.StrictMode>,
)
