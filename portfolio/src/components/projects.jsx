import projectLinks from "../data/project-links"
import { AiOutlineLink } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";


export default function Projects() {

    function Projects() {
        return (
            <div className="project">
                {projectLinks.map((element, index) => (
                    <div key={index} className="relative w-3/4 mx-auto my-10 mt-3 overflow-hidden cursor-pointer group">
                        <img src={element.image} alt="project image" className="object-fill w-full h-full transition-opacity duration-300 rounded-xl group-hover:opacity-50" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#1c1d25] bg-opacity-70 backdrop-blur-sm">
                            <div className="flex flex-col items-center transition-transform duration-300 ease-in translate-y-full group-hover:-translate-y-0 gap-y-1">
                                <h1 className="text-xl text-white md:text-4xl">{element.name}</h1>
                                <p className="mx-2 text-white md:text-xl">{element.type}</p>
                                <p className="hidden lg:block group-hover:text-white lg:px-10">{element.description} </p>
                                <div className="flex items-center gap-x-2 mt-[0.2rem] group-hover:text-white md:text-2xl">
                                    <a href={element.url} target="_blank" rel="noopener noreferrer"><AiOutlineLink /></a>
                                    <a href={element.repo} target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <section className="overflow-scroll xl:h-screen">
            <h1 className="text-4xl font-bold text-center xl:pt-5">Projects</h1>
            <Projects />
        </section>
    )
}