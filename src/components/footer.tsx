export default function Footer() {
    return (
        <section className="bottom lg:h-screen lg:flex lg:flex-col">
            <div className="h-full text-white pl-10 pt-8 md:flex lg:pl-40 lg:items-center">
                <div className="pb-5 leading-8">
                    <h1 className="font-bold lg:text-5xl pb-5">Contact Me</h1>
                    <div className="lg:text-xl">jameswu49@gmail.com</div>
                </div>
                <div className="leading-8 pb-8 md:ml-32">
                    <h1>My Projects</h1>
                    <h1>My Resume</h1>
                </div>
            </div>
            <hr className="text-white mx-10" />
            <div className="text-white flex justify-evenly py-8">
                <div><a href="https://github.com/jameswu49">GitHub</a></div>
                <div><a href="https://www.linkedin.com/in/jameswu49/">LinkedIn</a></div>
            </div>
        </section>
    )
}