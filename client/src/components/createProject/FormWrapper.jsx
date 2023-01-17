/*
    type FormWrapperPropers = {
        title: string
        children: ReactNode
    }
*/  

export function FormWrapper({title, children }){
    return <>
        <h2 className="text-left m-0 mb-[2rem] text-2xl text-blue-600 font-bold border-b-2 border-b-blue-400">{title}</h2>
        <div className="grid gap-[1rem] justify-start grid-cols-2">{children}</div>
    </>
}