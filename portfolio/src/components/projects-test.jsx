import projectLinks from "../data/project-links"

export default function Projects() {
    return (
        <section>
            <h1 className="text-center text-xl font-bold">Projects</h1>
            <div>
                {projectLinks.map((element, index) => (
                    <div key={index} className='border border-black mx-10 mt-2 mb-4 rounded-xl pl-5 py-5'>
                        <a href={element.url} target="_blank" rel="noreferrer" className="cursor-pointer text-xl font-bold">{element.name}</a>
                        <img src={element.logo} alt='logo' className="" />
                        <a href={element.repo} target="_blank" rel="noreferrer" className="cursor-pointer text-xl underline font-bold">Repo Link</a>
                    </div>
                ))}
            </div>
        </section>
    )
}