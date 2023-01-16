import {useState} from 'react'
import { Link } from 'react-router-dom'

function createProject() {
  const [modulesChosen, setModulesChosen] = useState(() => [])
  const [modules, setModules] = useState(() => ['Company', 'General Ledger', 'Accounts Payable', 'Accounts Receivable'])

  return (
    <div className="m-5 grid h-screen place-items-center">
      <div className="border border-slate-300 text-center rounded">
      <h1 className="pt-3 text-4xl">Create Project</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 grid place-items-center px-3" htmlFor="customer">
              Customer
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Customer Name" />
          </div>
          <div className="mb-4 flex relative">
            <label className="block text-gray-700 text-xl px-3 mb-2" htmlFor="username">
                Modules
            </label>
            <select name="" id="" className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {modules.length ? modules.map((module,i) =>
                <option key={module} onClick={() => setModulesChosen([...modulesChosen,module])} value={module}>{module}</option>             
              ) : ''}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
          </div>
          {modulesChosen.length ? (
            <section className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3">
            <ul className="">
              {modulesChosen.length ? modulesChosen.map((module, i) => 
                <li key={i}>{module}</li>
              ) : ''}
            </ul>
          </section>
          ) : '' }
          
          <Link to="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
              Next
            </button>
          </Link>
          </form>
      </div>
    </div>
  )
}

export default createProject