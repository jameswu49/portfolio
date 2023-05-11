export default function SideNav({ header, about, projectProps, form }) {
    return (
        <>
            <nav className="fixed right-5 top-[50%] h-40 z-50">
                <ul className="flex flex-col">
                    <li><button className="w-4 h-4 border border-black" onClick={() => header.current.scrollIntoView()}></button></li>
                    <li><button className="w-4 h-4 border border-black" onClick={() => about.current.scrollIntoView()}></button></li>
                    <li><button className="w-4 h-4 border border-black" onClick={() => projectProps.current.scrollIntoView()}></button></li>
                    <li><button className="w-4 h-4 border border-black" onClick={() => form.current.scrollIntoView()}></button></li>
                </ul>
            </nav>
        </>
    )
}