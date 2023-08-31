import Skills from "./skills"

export default function About() {
    return (
        <section className=" lg:text-lg lg:items-center lg:flex lg:justify-between lg:mx-5 xl:h-screen">
            <div className="px-4 lg:px-0 lg:w-3/4 max-w-[1000px] lg:h-full lg:flex lg:flex-col lg:justify-evenly max-h-[1000px] lg:text-xl">
                <h1 className="py-4 text-3xl font-bold md:my-2 lg:text-5xl">Hey There!</h1>
                <p className="mb-2 md:mb-2 lg:mb-0">
                    I&apos;m Jimmy, a web developer with a unique background in education.
                    My journey into the world of web development started with my passion for both technology and teaching.
                </p>

                <p className="mb-2 md:mb-2 lg:mb-0">
                    As a former educator, I had the privilege of shaping young minds and fostering a love for learning.
                    During my time as a teacher, I discovered the power of technology in the classroom and its ability to enhance
                    the learning experience. I became intrigued by the potential of web applications and how they could revolutionize
                    the way we access information and interact with the world.
                </p>

                <p className="mb-2 md:mb-2 lg:mb-0">
                    Driven by my curiosity and a desire to make a broader impact, I decided to take a leap of faith
                    and transition into the dynamic field of web development. The process was challenging, but my passion for creating meaningful,
                    user-friendly experiences kept me motivated.
                </p>

                <p className="mb-2 md:mb-2 lg:mb-0">
                    In my web development journey, I have learned that the skills I acquired as an educator have proven invaluable.
                    Effective communication, adaptability, and problem-solving are qualities that have seamlessly translated into my work as a developer.
                    I firmly believe that my background in teaching has given me a fresh outlook and an innovative approach to tackling challenges in the digital landscape.
                </p>

                <p className="mb-4 md:mb-4 lg:mb-0">
                    Let&apos;s connect and embark on this exciting journey together!
                </p>
            </div>
            <div className="lg:w-1/2">
                <Skills />
            </div>
        </section>
    )
}