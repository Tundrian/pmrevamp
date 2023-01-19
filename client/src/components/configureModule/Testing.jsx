export function Testing() {
    return <>
        <form className="grid grid-cols-4">
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Name: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" type="text" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Instructions: </label>
                <textarea className="h-36 col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Expected Results: </label>
                <textarea className="h-36 col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Client Tested: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5 border-blue-600" type="checkbox" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Notes: </label>
                <textarea className="h-36 col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" />
            </div>
            
        </form>
    </>
}