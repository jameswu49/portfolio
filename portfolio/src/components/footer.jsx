import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <section className="bottom lg:flex lg:flex-col">
            <hr className="border-t-black" />
            <div className="flex items-center py-8 text-white justify-evenly">
                <div className="flex flex-col items-center text-4xl">
                    <a href="https://github.com/jameswu49" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                    <p className="mt-2 text-base">Github</p>
                </div>
                <div className="flex flex-col items-center text-4xl">
                    <a href="https://www.linkedin.com/in/jameswu49/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                    <p className="mt-2 text-base">Linkedin</p>
                </div>
            </div>
            <div className="text-center text-white text-xs">
                <a href="https://www.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_11602236.htm#query=cartoon%20man%20asian%20coder&position=2&from_view=search&track=ais">Image by catalyststuff</a> on Freepik
            </div>
        </section>
    )
}