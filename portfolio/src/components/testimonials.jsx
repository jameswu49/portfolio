import robert from "../images/robert.jpeg"

export default function Testimonies() {
    return (
        <section className="lg:h-screen">
            <h1 className="text-center text-3xl font-bold lg:text-5xl lg:py-5">Testimonials</h1>
            <div className="lg:border lg:border-black lg:rounded-xl lg:mx-10 lg:mt-10">
                <div className="flex items-center my-3 mx-3 gap-x-3">
                    <img src={robert} alt="Robert" className="rounded-xl" />
                    <p>
                        <span className="font-bold text-sm lg:text-lg">Robert Gardner, Ph.D.</span>
                        <br />
                        <span className="text-xs lg:text-base">Software Development Instructor</span>
                        <br />
                        <span className="text-xs text-slate-500 lg:text-base">March 22, 2023, Robert was Jimmy&apos;s teacher</span>
                    </p>
                </div>
                <div className="px-4 py-4 lg:text-lg">
                    <p className="pb-2">
                        I taught Jimmy at LearningFuze, where Jimmy learned full stack development with React, Node, and PostgreSQL.
                        This was an intense course that required Jimmy to write a full stack application on his own.
                    </p>

                    <p className="pb-2">
                        At LearningFuze, Jimmy was an excellent student.
                        He learned quickly and got things done. For his final project, Jimmy built a full-featured app that provides information about a church with
                        dynamically-built links to sermon videos. To develop his project, Jimmy had to learn several technologies on his own, including the YouTube API
                        to both list videos and display them to the user, and full routing.
                    </p>

                    <p className="pb-2">
                        Jimmy was able to make his app full-featured and delivered it on time. Jimmy has a solid sense of software development, including how to write clean code,
                        and how to design and organize the code to make it easy to work with.
                    </p>

                    <p className="pb-2">
                        He strives to make his code easy to understand and pays attention to details.
                        Jimmy has a strong work ethic and is dedicated to getting work done, and done well. He knows when to ask questions and how to understand and make use of
                        the answers to his questions.
                    </p>

                    <p className="pb-2">
                        As a former Director of Engineering at Google, I am confident that Jimmy will be an asset to any team he joins.
                    </p>
                </div>
            </div>

        </section>
    )
}