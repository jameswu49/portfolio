import NavBar from "./navbar"

type HeaderProps = {
    header: React.RefObject<HTMLDivElement>;
}

export default function Header({ header }: HeaderProps) {
    return (
        <nav ref={header} className="flex absolute w-full items-center">
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

