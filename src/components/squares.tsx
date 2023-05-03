export default function Squares() {
    return (
        <header className="relative">
            <section className="md:flex">
                <Title />
            </section>
            <section className="md:flex">
                <div className=" md:w-1/2 h-[35rem] bg-[#ddb892]"></div>
                <div className="w-1/2">
                    <img className="h-1/2 absolute" src="images/me.jpg" alt="" />
                </div>
            </section>
        </header>
    )
}

function Title() {
    return (
        <>
            <div className="md:w-1/2 text-center items-center flex flex-col justify-center">
                <h1 className="text-4xl">Web <br></br> Developer.</h1>
                <p className="mt-5 text-lg">I find joy in creating.</p>
            </div>
            <div className="md:w-1/2 h-[35rem] bg-[#a3b18a]"></div>
        </>
    )
}

function Picture() {
    return (
        <>
            <section className="bottom px-10 py-10 md:w-2/4 md:py-0">
                <div className="relative md:right-32 lg:right-56 2xl:right-80">
                    <div className="absolute border-2 border-[#fca311] h-full w-full left-5 top-5 md:top-10 lg:left-8 2xl:top-20"></div>
                    <div className="image-container relative">
                        <img className="z-10 h-full w-full md:pt-10" src="images/me.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}