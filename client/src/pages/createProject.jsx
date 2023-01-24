import { useState } from 'react'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { ModuleSelection } from '../components/createProject/ModulesSelection'
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

const PROJECT_DATA = {
  customer: "",
  modules: ['Company', 'General Ledger', 'Accounts Payable', 'Accounts Receivable'],
  modulesChosen: []
}

function createProject() {

  const [modulesChosen, setModulesChosen] = useState(() => [])
  const [cacheFormData, setCacheFormData] = useState(PROJECT_DATA)

  //type: Partial<FormData>
  function updateFields(fields) {
    setCacheFormData(prev => {
      console.log(fields, prev, fields)
      return { ...prev, ...fields }
    })
  }

  //add each form component as an element in the useMultiStepForm argument
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    back,
    next,
    isLastStep
  } = useMultiStepForm([<ModuleSelection {...cacheFormData} updateFields={updateFields} />])

  function onSubmit(e) {
    e.preventDefault()

    if (!isLastStep) return next()

    //replace with fetch call and route to next page
    alert("Successful Account Creation")
  }

  return (

    <div className="grid place-items-center m-3">
      <div className="border border-gray-300 text-center rounded">
        <h1 className="pt-3 text-4xl clas">Create Project</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <div className="mb-4 flex">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="mt-[1rem] flex gap-[0.5rem] justify-end">
            {/* {isFirstStep !== 0 && <button type="button" onClick={back} className="border border-gray-400 rounded-lg px-3 py-1 shadow-md hover:bg-blue-600 hover:text-white mx-2">Back</button>} */}
            <button type="submit" className="bg-blue-500 text-white border border-gray-400 rounded-lg px-3 py-1 shadow-md hover:bg-green-500 mx-2">
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
      </div>

  )
}

export default createProject