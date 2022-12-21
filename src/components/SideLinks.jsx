export default function SideLinks() {
    return (
        <>
            <ul className={"hidden xl:flex flex-col fixed bottom-0 left-0 items-center px-14 slate after-line text-xl"}>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://github.com/ishwarjagdale"} target={"_blank"} className={"hover-accent hover-displace fab fa-github"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://instagram.com/ishwarjagdale_"} target={"_blank"} className={"hover-accent hover-displace fab fa-instagram"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://linkedin.com/in/ishwar-jagdale"} target={"_blank"} className={"hover-accent hover-displace fab fa-linkedin"} rel="noreferrer" /></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2 pb-4"}><a href={"https://www.hackerrank.com/ishwarjagdale"} target={"_blank"} className={"hover-accent hover-displace fab fa-hackerrank"} rel="noreferrer" /></li>
            </ul>
            <div className={"slate hidden xl:flex flex-col fixed bottom-0 right-0 items-center px-14 after-line w-fit"}>
                <a href={"mailto:ishwarjagdale50@gmail.com"} className={"vertical-text text-sm hover-accent pb-4 hover-displace cursor-pointer font-monospace opacity-60 font-medium tracking-widest"}>ishwarjagdale50@gmail.com</a>
            </div>
        </>
    )
}
