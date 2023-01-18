import { useState, useRef } from "react";

export function Accordian({ title, content }) {
    const [isOpen, setIsOpen] = useState(() => false)
    const [height, setHeight] = useState("")
    const contentElement = useRef(null)

    function handleOpenState() {
        console.log(isOpen)
        setIsOpen(!isOpen)
        setHeight(isOpen ? `h-[${contentElement.current.scrollHeight}px]` : 'h-0')
    }
    

    return (
        <div className="border border-slate-600 rounded-t-sm my-5">
            <div className={"bg-slate-600 p-4 flex justify-between text-white"}>
                <h4 className="font-semibold">{title}</h4>
                {isOpen ? '+' : '-'}
            </div>
            <div
                ref={contentElement}
                className={`bg-white overflow-hidden transition-all duration-200 ${height}`}
            >
                <p className="p-4">{content}</p>
            </div>
        </div>
    )
}