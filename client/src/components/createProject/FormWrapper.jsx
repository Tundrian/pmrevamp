/*
    type FormWrapperPropers = {
        title: string
        children: ReactNode
    }
*/  

export function FormWrapper({title, children }){
    return <>
        <h2 className="text-center m-0 mb-[2rem]">{title}</h2>
        <div className="grid gap-[1rem] justify-start grid-cols-2">{children}</div>
    </>
}