import { useState } from "react";

export default function MyProjects() {
    const [hover, setHover] = useState(false)
    const [index, setIndex] = useState<number | null>(null)

    type Project = {
        name: string;
        type: string;
        image: string;
        url: string;
    }

    const projects: Project[] = [
        { name: 'Muze', type: 'Music Site', image: 'images/muze.png', url: 'https://jameswu49.github.io/Muze/' },
        { name: 'Abide', type: 'Church Site', image: 'images/abide.png', url: 'https://abide-ministries.herokuapp.com/' },
    ]

    function handleIndex(index: number) {
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

    const images = index !== null ? <img className="lg:h-full lg:w-full lg:rounded-lg" src={projects[index].image} alt="" /> : ''

    const myProjects = projects.map((element, index) => {
        return (
            <>
                <div key={index} className="flex justify-between border-t-2 cursor-pointer parent name" onMouseEnter={() => handleIndex(index)}
                    onClick={handleClick}>
                    <span className="project-name">{element.name}</span>
                    <span>{element.type}</span>
                </div>
            </>
        );
    });

    return (
        <section className="lg:flex lg:h-screen lg:items-center lg:px-3">
            <div className="leading-10 border py-3 my-10 mx-5 lg:h-fit lg:w-1/2 parent">
                <h1 className="pl-10 font-bold text-lg">My Projects</h1>
                <div className="w-full px-10">
                    {myProjects}
                </div>
            </div>
            <div className="lg:w-1/2 lg:h-1/2 child">
                {!hover && <div className="hidden lg:flex items-center h-full font-bold text-2xl justify-center">Hover over a link to check out a project!</div>}
                {hover && images}
            </div>
        </section>
    )
}
