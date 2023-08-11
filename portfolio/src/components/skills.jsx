import skills from "../data/skills"
import boy from "../images/boy.jpg"

export default function Skills() {
    return (
        <div>
            <div className="w-[20rem] mx-auto lg:w-[18rem]">
                <img src={boy} alt="boy on computer" />
            </div>
            <div className="grid grid-cols-3 gap-y-4 place-items-center">
                {skills.map((element, index) => (
                    <div key={index} className="border-black border-2 py-2 px-4 rounded-xl w-24 text-center text-xs">
                        <p className="font-bold">{element.name}</p>
                        <img src={element.icon} alt={element.name} className="w-full" />
                    </div>
                ))
                }
            </div >
        </div >
    )
}