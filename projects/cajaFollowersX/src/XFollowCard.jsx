import{useState} from "react"
export function XFollowCard({userName, name, isFollowing}){

    const imageSrc = `https://unavatar.io/${userName}`
    return(
        <article className="x-followCard">
            <header className="x-followCard-header">
                <img className="x-followCard-avatar" alt="El avatar de Twitch" src={imageSrc} />
                <div className="x-followCard-info">
                    <strong>{name}</strong>
                <span className="x-followCard-infoUsername">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="x-followCard-button"> 
                    Seguir
                </button>
            </aside>
        </article>
    )
}