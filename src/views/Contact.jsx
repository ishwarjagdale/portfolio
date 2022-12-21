export default function Contact() {
    return (
        <div className={"flex flex-col h-full mb-24 items-center justify-center max-w-[1000px] w-full"}>
            <span className={"accent font-monospace mb-4 text-lg"}>04. What's Next?</span>
            <span className={"slate font-[Poppins] font-[600] mb-6 text-6xl"}>Get In Touch</span>
            <p className={"dark-slate max-w-[600px] text-center mb-12"}>
                Hi! I'm currently looking for new opportunities, so feel free to contact.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <a href={"mailto:ishwarjagdale50@gmail.com"} className={" accent hover-btn accent-border border p-4 px-8 text-[16px] font-monospace rounded"}>
                Say Hello
            </a>
        </div>
    )
}
