import React from 'react'
import ReactDOM from 'react-dom/client' 


import './global.css'


import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'

const tweets = [
  'Primeiro tweet',
  'Bora, negada',
  'Teste...',
  'Eu voce o mar e ela',

]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <div className='layout'>
    <Sidebar />

    <div className='content'>
      <main className='timeline'>
        <Header title='Home'/>
      
      <RouterProvider router = {router}/>

        <form className='new-tweet-form'>

          <label htmlFor="tweet">
            <img src="https://github.com/tiagosvieira10.png" alt="Tiago Vieira" />
            <textarea id="tweet" placeholder="O que está acontecendo?"></textarea>
          </label>

          <button type='submit'>Tweet</button>
        </form>

        <Separator/>

        {tweets.map(tweet=>{
          return <Tweet key={tweet} content={tweet} />
        })}


      </main>
    </div>
      
   </div>
  </React.StrictMode>,
)
