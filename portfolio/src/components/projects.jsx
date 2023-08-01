import { useState } from "react";
import muze from "../images/muze.png"
import abide from "../images/abide.png"

export default function MyProjects() {
    const [hover, setHover] = useState(false)
    const [index, setIndex] = useState(null)
    const [link, setLink] = useState(false)

    const projects = [
        { name: 'Muze', type: 'Music Site', image: muze, url: 'https://jameswu49.github.io/Muze/' },
        { name: 'Abide', type: 'Church Site', image: abide, url: 'https://abide-ministries.herokuapp.com/' },
    ]

    function handleIndex(index) {
        setHover(true)
        setIndex(index)
    }

    function handleHoverAway() {
        setHover(false)
    }

    function handleClick() {
        if (index !== null) {
            return window.open(projects[index].url)
        }
    }

    const images = index !== null ? <img className={`lg:h-full lg:w-full lg:rounded-lg projects ${hover ? 'show-projects' : ''}`} src={projects[index].image} alt="" /> : ''

    const myProjects = projects.map((element, index) => {
        return (
            <>
                <div key={index} className="flex justify-between border-b-2  border-slate-300 cursor-pointer name" onMouseEnter={() => handleIndex(index)}
                    onClick={handleClick}>
                    <span className="project-name">{element.name}</span>
                    <span>{element.type}</span>
                </div>
            </>
        );
    });

    return (
        <section className="bg-[#edede9] mt-5 pt-5 pb-10 lg:flex lg:flex-col lg:h-screen lg:items-center lg:px-3">
            <h1 className=" font-bold text-lg text-center underline py-2 lg:text-2xl">My Projects</h1>
            <div className="lg:flex lg:w-full lg:justify-between lg:items-center lg:h-full">
                <div className="leading-10 border border-slate-300 py-5 mx-5 lg:h-fit lg:w-1/2">
                    <div className="w-full px-10 relative" onMouseLeave={handleHoverAway}>
                        {myProjects}
                    </div>
                </div>
                <div className={`lg:w-1/2 lg:h-1/2 ${hover ? 'show' : ''}`}>
                    {!hover && <div className="hidden lg:flex items-center h-full font-bold text-2xl justify-center">Hover over a link to check out a project!</div>}
                    {hover && images}
                </div>
            </div>
        </section>
    )
}