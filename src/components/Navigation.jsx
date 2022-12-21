export default function Navigation() {
    return (
        <nav id={"navigation"} className={"flex w-full h-[100px] px-14 items-center justify-between"}>
            <a href={"/"} className={"z-[100] text-4xl cursor-pointer accent fab fa-typo3"} />
            <div className={"flex items-center z-[100]"}>
                <ul className={"flex slate font-monospace text-[13px] mr-4 tracking-wide"}>
                    <li className={"px-4"}><a className={"hover-accent"} href={"/about"}><span className={"mr-2 accent"}>01.</span><span>About</span></a></li>
                    <li className={"px-4"}><a className={"hover-accent"} href={"/experience"}><span className={"mr-2 accent"}>02.</span><span>Experience</span></a></li>
                    <li className={"px-4"}><a className={"hover-accent"} href={"/work"}><span className={"mr-2 accent"}>03.</span><span>Work</span></a></li>
                    <li className={"px-4"}><a className={"hover-accent"} href={"/contact"}><span className={"mr-2 accent"}>04.</span><span>Contact</span></a></li>
                </ul>
                <button className={"p-2 px-4 rounded cursor-pointer hover-btn accent accent-border text-sm border font-monospace"}>Resume</button>
            </div>
        </nav>
    )
}
