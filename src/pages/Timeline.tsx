import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

const tweets = [
    'Primeiro tweet',
    'Bora, negada',
    'Teste...',
    'Eu voce o mar e ela',
  
  ]

export function Timeline(){
    return(

        <main className='timeline'>
<Header title='Home'/>


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

    )
}

