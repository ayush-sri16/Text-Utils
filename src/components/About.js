import React, { useState } from 'react'

export default function About() {

    const [modes, setmodes] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleModes = () => {
        if (modes.color === 'black') {
            setmodes({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("enable Light mode")
        } else {
            setmodes({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("enable dark mode")

        }
    }
    return (
        <div>
            <div className='container' style={modes}>
                <h1>About Us</h1>
                <div className="row">
                    <div className="col border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente voluptatem odit. Veniam ab nemo quod est vitae! Harum quia veritatis sit nesciunt! Excepturi voluptas hic asperiores facere distinctio impedit labore. Libero aliquid repellat laboriosam delectus recusandae aperiam voluptatem in!</div>
                    <div className="col border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente voluptatem odit. Veniam ab nemo quod est vitae! Harum quia veritatis sit nesciunt! Excepturi voluptas hic asperiores facere distinctio impedit labore. Libero aliquid repellat laboriosam delectus recusandae aperiam voluptatem in!</div>
                    <div className="col border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente voluptatem odit. Veniam ab nemo quod est vitae! Harum quia veritatis sit nesciunt! Excepturi voluptas hic asperiores facere distinctio impedit labore. Libero aliquid repellat laboriosam delectus recusandae aperiam voluptatem in!</div>
                </div>
                <button className="btn btn-primary my-3" onClick={toggleModes}>{btnText}</button>
            </div>
        </div>
    )
}
