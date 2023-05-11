import Timeline from "./timeline"

type AboutProps = {
    about: React.RefObject<HTMLDivElement>;
}

export default function About({ about }: AboutProps) {
    return (
        <section ref={about} className="lg:h-screen lg:flex lg:px-10 lg:items-center lg:text-lg">
            <div className="lg:w-1/2">
                <h1 className="underline font-bold text-center lg:text-3xl lg:py-5">Who Am I?</h1>
                <p className="lg:px-20 lg:leading-10 lg:py-1">
                    As a web developer, I have always been passionate about creating engaging and user-friendly experiences for people.
                    My journey towards web development started in 2022, after spending several years as an elementary school teacher.
                </p>
                <p className="lg:px-20 lg:leading-10 lg:py-1">
                    As much as I loved teaching, I realized that I wanted to explore a different career path that allowed me to combine my creativity and problem-solving skills.
                    Web development has given me the perfect opportunity to channel my interests and skillsets towards building dynamic and visually stunning websites.
                    I have found that the process of creating something from scratch, and seeing it come to life on the web, is both rewarding and exhilarating.
                </p>
                <p className="lg:px-20 lg:leading-10 lg:py-1">
                    Through my work, I hope to contribute to the vast online landscape by developing innovative solutions that empower people to engage with content in a more meaningful way.
                    In my free time, I enjoy exploring new technologies and frameworks, and I am always on the lookout for ways to improve my skills as a web developer.
                    I believe that the key to creating successful websites is to stay curious and adaptable, and I am excited to continue learning and growing as a developer.
                </p>
            </div>
            <div className="lg:w-1/2">
                <Timeline />
            </div>
        </section>
    )
}