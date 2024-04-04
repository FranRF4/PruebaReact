import{useState} from "react"

export function XFollowCard({children ,userName, }){
    const [isFollowing,setIsFollowing]= useState (false)

    const text =isFollowing ? 'Sigiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'x-followCard-button   is-following' : 'x-followCard-button'

    const handleClick = () =>  {
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${userName}`
    return(
        <article className="x-followCard">
            <header className="x-followCard-header">
                <img className="x-followCard-avatar" alt="El avatar de Twitch" src={imageSrc} />
                <div className="x-followCard-info">
                    <strong>{children}</strong>
                <span className="x-followCard-infoUsername">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}> 
                   <span className="x-followCard-text"> {text}</span>
                    <span className="x-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}