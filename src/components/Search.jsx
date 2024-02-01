import { useState } from "react"
import { useGlobalContext } from "../context"

export default function Search(){
    const {setSearchTerm} = useGlobalContext()
    const [text, setText] = useState('')

    function handleChange(e){
        setText(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    }
    return(

        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-input" placeholder="type favorite meal" value={text} onChange={handleChange}/>
                <button className="btn" type="submit">Search</button>
                <button className="btn btn-hipster" type="button">Surprise me</button>
            </form>
        </header>
    )
}