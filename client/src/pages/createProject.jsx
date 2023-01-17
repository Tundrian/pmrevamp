import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectModules from '../components/ProjectModules'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { UserForm } from '../components/UserForm'
import { AddressForm } from '../components/AddressForm'
import { AccountForm } from '../components/AccountForm'

//type FormData = {
// everything as a string 
//}
const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function createProject() {
  const [modulesChosen, setModulesChosen] = useState(() => [])
  const [modules, setModules] = useState(() => ['Company', 'General Ledger', 'Accounts Payable', 'Accounts Receivable'])
  //type: Partial<FormData>
  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const [data, setData] = useState(INITIAL_DATA)
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    back,
    next,
    isLastStep
  } = useMultiStepForm([<UserForm {...data} updateFields={updateFields} />, <AddressForm {...data} updateFields={updateFields} />, <AccountForm {...data} updateFields={updateFields} />])

  function onSubmit(e) {
    e.preventDefault()
    if(!isLastStep) return next()
    alert("Successful Account Creation")
  }



  return (

    <div className="relative bg-white border border-gray-900 p-[2rem] m-[1rem] border-r-[0.5rem] font-sans ">
      <form onSubmit={onSubmit}>
        <div className="absolute, top[0.5rem] right-[0.5rem]">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="mt-[1rem] flex gap-[0.5rem] justify-end">
          {isFirstStep !== 0 && <button type="button" onClick={back} className="border border-gray-400 rounded-lg px-3 py-1 shadow-md hover:bg-blue-600 hover:text-white mx-2">Back</button>}
          <button type="submit" className="border border-gray-400 rounded-lg px-3 py-1 shadow-md hover:bg-blue-600 hover:text-white mx-2">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
    // <div className="grid place-items-center">
    //   <div className="border border-gray-300 text-center rounded">
    //   <h1 className="pt-3 text-4xl">Create Project</h1>
    //     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
    //       <div className="mb-4 flex">
    //         <label className="text-gray-700 text-xl mb-2 grid place-items-center px-3" htmlFor="customer">
    //           Customer
    //         </label>
    //         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Customer Name" />
    //       </div>
    //       <div className="mb-4 flex relative">
    //         <label className="block text-gray-700 text-xl px-3 mb-2" htmlFor="username">
    //             Modules
    //         </label>
    //         <select name="" id="" className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    //           {modules.length ? modules.map((module,i) =>
    //             <option key={module} onClick={() => setModulesChosen([...modulesChosen,module])} value={module}>{module}</option>             
    //           ) : ''}
    //         </select>
    //         <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    //       <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    //     </div>
    //       </div>
    //       {modulesChosen.length ? (
    //           <section className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3">
    //           <ul className="">
    //             {modulesChosen.length ? modulesChosen.map((module, i) => 
    //               <li key={i}>{module}</li>
    //             ) : ''}
    //           </ul>
    //         </section>
    //       ) : '' }
    //       <Link to="">
    //         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
    //           Next
    //         </button>
    //       </Link>
    //       </form>
    //   </div>
    // </div>
  )
}

export default createProject