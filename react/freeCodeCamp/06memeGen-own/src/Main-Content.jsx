import React from 'react'
import { useEffect } from 'react'
import { use } from 'react'

export default function Main_Content() {
    const [memes, setMemes] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState(null)
    function handleChange(e){
        const {value, name} = e.currentTarget
        setMemes(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
 useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
}, [])
    function genImage(){
   const randomNumber = Math.floor(Math.random() * allMemes.length)
   const newMemeUrl = allMemes[randomNumber].url 
   setMemes(prevMeme => ({
    ...prevMeme,
    imageUrl: newMemeUrl
   }))
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={memes.topText}
                        />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memes.bottomText}
                    />
                </label>
                <button onClick={genImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memes.imageUrl} />
                <span className="top">{memes.topText}</span>
                <span className="bottom">{memes.bottomText}</span>
            </div>
        </main>
    )
}