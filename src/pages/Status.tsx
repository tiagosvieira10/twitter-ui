import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';
import './Status.css';

const answers = [
    "Nada a ver isso ai",
    "Tudo a ver",
    "O que tô fazendo aqui?"
]


export function Status(){
    return(
        <main className='status'>
        <Header title='Tweet'/>
        
        <Tweet content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nisi fuga neque vero accusantium a laborum eveniet iste quas quam! Architecto corrupti quaerat velit consequuntur molestiae accusantium aperiam recusandae perferendis!'/>
        
        <Separator/>
        
        <form className='answer-tweet-form'>
        
          <label htmlFor="tweet">
            <img src="https://github.com/tiagosvieira10.png" alt="Tiago Vieira" />
            <textarea id="tweet" placeholder="Qual sua resposta"></textarea>
          </label>
        
          <button type='submit'>Responder</button>
        </form>
        
        
        {answers.map(resposta=>{
          return <Tweet key={resposta} content={resposta} />
        })}
        
        
        </main>
        
    )
}