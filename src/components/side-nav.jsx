export default function SideNav({ first, about, projectProps, form }) {
    return (
        <>
            <nav className="fixed right-5 top-[50%] h-40 z-50">
                <ul className="flex flex-col">
                    <li><button className="w-4 h-4 border border-black nav" onClick={() => first.current.scrollIntoView({ behavior: 'smooth' })}></button></li>
                    <li><button className="w-4 h-4 border border-black" onClick={() => about.current.scrollIntoView({ behavior: 'smooth' })}></button></li>
                    <li><button className="w-4 h-4 border border-black" onClick={() => projectProps.current.scrollIntoView({ behavior: 'smooth' })}></button></li>
                    <li><button className="w-4 h-4 border border-black" onClick={() => form.current.scrollIntoView({ behavior: 'smooth' })}></button></li>
                </ul>
            </nav>
        </>
    )
}