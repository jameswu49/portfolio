export default function Footer() {
    return (
        <footer className="bottom md:h-screen">
            <div className="h-full text-white pl-10 pt-8 md:flex">
                <div className="pb-5 leading-8">
                    <h1 className="font-bold">Contact Me</h1>
                    <div>jameswu49@gmail.com</div>
                </div>
                <div className="leading-8 pb-8 md:ml-32">
                    <h1>My Projects</h1>
                    <h1>My Resume</h1>
                </div>
            </div>
            <hr className="text-white mx-10" />
            <div className="text-white flex justify-evenly py-8">
                <div>GitHub</div>
                <div>LinkedIn</div>
            </div>
        </footer>
    )
}