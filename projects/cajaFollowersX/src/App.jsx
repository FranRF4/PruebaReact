import './App.css'
import { XFollowCard } from './XFollowCard'

export function App() {
    return (
        <section className='App'>
            <XFollowCard userName={"midudev"}> 
            Miguel Ángel Durán
            </XFollowCard>
            <XFollowCard userName={"pheralb"}>
            Pablo Hernandez
            </XFollowCard> 
            <XFollowCard userName={"elonmusk"}>
            Elon Musk
            </XFollowCard> 
            <XFollowCard userName={"Fran_RF4"}>
            Francisco Ruiz Florido
            </XFollowCard>
        </section>
    )
}