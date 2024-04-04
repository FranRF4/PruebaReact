import './App.css'
import { XFollowCard } from './XFollowCard'

export function App() {
    return (
        <section className='App'>
            <XFollowCard userName={"midudev"} name={"Miguel Ángel Durán"} />
            <XFollowCard userName={"pheralb"} name={"Pablo Hernandez "} />
            <XFollowCard userName={"elonmusk"} name={"Elon Musk "} />
            <XFollowCard userName={"Fran_RF4"} name={"Francisco Ruiz Florido"} />
        </section>
    )
}