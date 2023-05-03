import NavBar from "./navbar"

export default function Header() {
    return (
        <nav className="flex absolute w-full items-center">
            <Logo />
        </nav>
    )
}

function Logo() {
    return (
        <>
            <h1 className="flex text-base font-bold w-full px-5 gold pt-10 items-center justify-between md:fixed md:w-full md:pt-20">
                Jimmy
                <NavBar />
            </h1>
        </>
    )
}

