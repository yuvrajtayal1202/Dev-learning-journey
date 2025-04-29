import React from 'react'

export default function Main_Content() {
    const [memes, setMemes] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(e){
        const {value, name} = e.currentTarget
        setMemes(prevMeme => ({
            ...prevMeme,
            [name]: value
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
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memes.imageUrl} />
                <span className="top">{memes.topText}</span>
                <span className="bottom">{memes.bottomText}</span>
            </div>
        </main>
    )
}