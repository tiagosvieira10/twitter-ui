interface TweetProps{
    user: string
    children: string
    likes?: number
}

export function Tweet(props:TweetProps){

    return (
        <div>
            <strong>{props.user}</strong>
            <p>{props.children}</p>
            <button>Like </button>    
        </div>
    )
}