export default function Timeline() {
    return (
        <>
            <ul className="timeline">

                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="flag ">Bootcamp Graduate</span>
                            <span className="time-wrapper"><span className="time">2022 - present</span></span>
                        </div>
                        <div className="desc">Graduated from LearningFuze and improving my skills!</div>
                    </div>
                </li>

                <li>
                    <div className="direction-l">
                        <div className="flag-wrapper">
                            <span className="flag">Career Transition</span>
                            <span className="time-wrapper"><span className="time">April 2022 - Dec 2022</span></span>
                        </div>
                        <div className="desc">Became interested in Web Development and did self-studying.</div>
                    </div>
                </li>

                <li>
                    <div className="direction-r">
                        <div className="flag-wrapper">
                            <span className="flag">2nd Grade Teacher</span>
                            <span className="time-wrapper"><span className="time">2020 - 2022</span></span>
                        </div>
                        <div className="desc">Managed over 30 students on a daily basis and finding ways to incoporate technology in the school setting!</div>
                    </div>
                </li>

            </ul>
        </>
    )
}