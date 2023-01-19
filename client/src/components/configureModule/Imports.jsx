export function Imports() {
    return <>
        <form className="grid grid-cols-4">
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Name: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" type="text" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Status: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" type="text" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">CSV File: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" type="file" />
            </div>
            <div className="mt-3 mx-3 border-b pb-3 w-full pr-5 grid grid-cols-4 col-span-4" >
                <label className="col-span-1" htmlFor="">Excel File: </label>
                <input className="col-span-3 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full border-blue-600" type="file" />
            </div>
        </form>
    </>
}