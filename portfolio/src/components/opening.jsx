import me from "../images/me.jpg"

export default function Opening() {
    return (
        <section className="md:flex lg:h-screen">
            <Title />
            <Picture />
        </section>
    )
}

function Title() {
    return (
        <>
            <div className="gold md:items-center h-full w-full flex flex-col justify-center section px-5 py-32 md:px-20">
                <h1 className="flex text-4xl md:pt-0 lg:mr-10 lg:text-6xl 2xl:text-8xl">Web <br></br> Developer.</h1>
                <p className="mt-5 text-lg text-white lg:mr-10 lg:text-2xl">&apos;There is no greater joy in life <br></br> than the joy of creating something&apos;.</p>
                <p className="text-red-600">- Abhay Kumar</p>
            </div>
        </>
    )
}


function Picture() {
    return (
        <>
            <section className="bottom px-10 py-10 md:w-2/4 md:py-0">
                <div className="relative md:top-20 md:right-32 lg:top-48 2xl:top-64">
                    <div className="absolute top-5 left-5 border-2 border-[#fca311] h-full w-full lg:w-56 2xl:w-64"></div>
                    <img className="relative lg:h-80 2xl:h-96" src={me} alt="" />
                </div>
            </section>
        </>
    );
}
