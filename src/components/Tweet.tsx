import './Tweet.css'
import {ChatCircle, ArrowsClockwise,Heart} from 'phosphor-react'
import { Link } from 'react-router-dom'

interface TweetProps{
    content: string
}

export function Tweet(props: TweetProps){

    return (
        <Link to="/tweet" className="tweet">
           <img src="https://github.com/tiagosvieira10.png" alt="foto Tiago" />

           <div className='tweet-content'>

                <div className="tweet-content-header">
                    <strong>Tiago Vieira</strong>
                    <span>@tiagosvieira</span>
                </div>

        	    <p>
                    {props.content}
                </p>

                <div className="tweet-content-footer">
                    <button type='button'>
                        <ChatCircle/>
                        20
                    </button>
                    <button type='button'>
                        <ArrowsClockwise/>
                        20
                    </button>
                    <button type='button'>
                        <Heart/>
                        20
                    </button>
                </div>

           </div>
        </Link>
    )
}