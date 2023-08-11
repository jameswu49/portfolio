import Skills from "./skills"

export default function About() {
    return (
        <section className="lg:px-10 lg:text-lg lg:items-center lg:flex xl:h-screen ">
            <div className="lg:w-1/2">
                <h1 className="py-5 pl-4 text-3xl font-bold lg:text-4xl lg:pb-5">Hey There!</h1>
                <div className="px-4 leading-8">
                    <p className="pb-2">
                        I&apos;m Jimmy, a web developer with a unique background in education.
                        My journey into the world of web development started with my passion for both technology and teaching.
                    </p>

                    <p className="pb-2">
                        As a former educator, I had the privilege of shaping young minds and fostering a love for learning.
                        During my time as a teacher, I discovered the power of technology in the classroom and its ability to enhance
                        the learning experience. I became intrigued by the potential of web applications and how they could revolutionize
                        the way we access information and interact with the world.
                    </p>

                    <p className="pb-2">
                        Driven by my curiosity and a desire to make a broader impact, I decided to take a leap of faith
                        and transition into the dynamic field of web development. The process was challenging, but my passion for creating meaningful,
                        user-friendly experiences kept me motivated.
                    </p>

                    <p className="pb-4">
                        In my web development journey, I have learned that the skills I acquired as an educator have proven invaluable.
                        Effective communication, adaptability, and problem-solving are qualities that have seamlessly translated into my work as a developer.
                        I firmly believe that my background in teaching has given me a fresh outlook and an innovative approach to tackling challenges in the digital landscape.
                    </p>

                    <p>
                        Let&apos;s connect and embark on this exciting journey together!
                    </p>
                </div>
            </div>
            {/* <hr className="my-2 border-black border-b-1" /> */}
            <div className="lg:w-1/2">
                <Skills />
            </div>
        </section>
    )
}