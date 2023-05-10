import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'
import {FormEvent, useState} from "react"


let newTweet = ''  

export function Timeline(){

  const [tweets, setTweets] = useState([
    'Primeiro tweet',
    'Bora, negada',
    'Teste...',
    'Eu voce o mar e ela',
  
  ])

function createNewTweet (event:FormEvent){
  event.preventDefault()

  setTweets([newTweet, ...tweets])
  
}
  return(

    <main className='timeline'>
       <Header title='Home'/>


          <form onSubmit = {createNewTweet} className='new-tweet-form'>

            <label htmlFor="tweet">
              <img src="https://github.com/tiagosvieira10.png" alt="Tiago Vieira" />
              <textarea 
                id="tweet" 
                placeholder="O que está acontecendo?"
                onChange={(event)=>{
                  newTweet = event.target.value
                }}
    />  
    </label>

  <button type='submit'>Tweet</button>
</form>

<Separator/>

{tweets.map(tweet=>{
  return <Tweet key={tweet} content={tweet} />
})}


</main>

    )
}

