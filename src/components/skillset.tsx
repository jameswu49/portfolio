import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function SkillSet() {
    return (
        <>
            <h1 className="text-center">Skills</h1>
            <Icons />
        </>
    )
}

function Icons() {
    return (
        <>
            <section className="flex justify-evenly">
                <div className="flex flex-col items-center">
                    <ImHtmlFive className="text-orange-500 text-6xl" />
                    <p>HTML</p>
                </div>
                <div className="flex flex-col items-center">
                    <IoLogoCss3 className="text-blue-500 text-6xl" />
                    <p>CSS</p>
                </div>
                <div className="flex flex-col items-center">
                    <SiJavascript className="text-yellow-400 text-6xl" />
                    <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaReact className="text-cyan-400 text-6xl" />
                    <p>React</p>
                </div>
            </section>
        </>
    )
}