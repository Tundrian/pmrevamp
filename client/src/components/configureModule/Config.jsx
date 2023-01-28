import { useState } from "react"

export function Config() {

    const [formFields, setFormFields] = useState({
        name: '',
        topic: '',
        status: '',
        instructions: '',
        screenshots: []
    })

    return <>
        <form className="grid grid-cols-4">
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Name: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" type="text" />
            </div>
            <div className="relative mt-3 border-b pb-3 w-full grid grid-cols-4 col-span-4" >
                <label className=" block col-span-1" htmlFor="">Topic: </label>
                <select name="" id="" className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline col-span-3">
                    <option value="setup">Setup</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Status: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" type="text" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Instructions: </label>
                <textarea className="h-36 col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Screenshots: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" type="file" />
            </div>
        </form>
    </>
}

