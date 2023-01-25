import { useState } from 'react'
import { Accordian } from '../components/createProject/Accordian'
import { Config } from '../components/configureModule/Config'
import { Imports } from '../components/configureModule/Imports'
import { Questions } from '../components/configureModule/Questions'
import { Testing } from '../components/configureModule/Testing'
import { StepList } from '../components/configureModule/StepList'

//From DB
const MODULES = [
    {
        id: "1",
        name: "company",
    },
    {
        id: "2",
        name: "general ledger",
    },
    {
        id: "3",
        name: "accounts receivable",
    },
]

//From DB
const TOPICS = [
    {
        id: "1",
        name: "Initial Configuration",
        topicOrder: 1,
        typeName: "configuration", //Configuration
        moduleID: "1" //Company
    },
    {
        id: "2",
        name: "Default Setup",
        topicOrder: 2,
        typeName: "configuration", //Configuration
        moduleID: "1" //Company
    }
]

//From DB
const STEPS = [
    {
        id: "1",
        orderNumber: 2,
        name: "Register",
        topicID: "1", //Initial Configuration, Configuration, Company
        instructions: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, facere impedit! Dolorem omnis quas eius! Voluptate suscipit praesentium dolor mollitia.",
        screenshots: [
            "http://placekitten.com/200/300",
            "https://placekitten.com/300/300"
        ]
    },
    {
        id: "2",
        orderNumber: 1,
        name: "Login",
        topicID: "1", //Initial Configuration, Configuration, Company
        instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quis.",
        screenshots: [
            "http://placekitten.com/300/200",
            "https://placekitten.com/400/400"
        ]
    },

]

const TYPES = [
    "Configuration",
    "Setup Import",
    "Question",
    "Testing",
]

const accordians = {
    "Configuration": {component: Config, title: "Config"},
    "Setup Import": {component: Imports, title: "Setup Imports"},
    "Question": Questions,
    "Testing": Testing,
}
export function ConfigureModules() {

    const [selectedType, setSelectedType] = useState('')
    let Component = accordians[selectedType]

    return (
        <>
            <div className="grid place-items-center m-3">
                <div className="border border-gray-300 text-center rounded w-full">
                    <h1 className="pt-3 text-4xl">Configure Module</h1>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                        <div className="mb-4 flex justify-between flex-col items-start">

                            <label htmlFor="" className="mb-2">Select Module</label>
                            <select name="" id="" className="mb-5 bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                {MODULES.length && MODULES.map(module => (
                                    <option key={module.id} value={module.name}>{module.name}</option>
                                ))}
                            </select>

                            <label htmlFor="" className="mb-2">Choose checklist type</label>
                            <select name="" id="" className="hover:cursor-pointer mb-5 bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                {TYPES.length && TYPES.map(type => (
                                    <option onClick={() => setSelectedType(type)} key={type} className="hover:cursor-pointer" value={type}>{type}</option>
                                ))}
                            </select>

                        </div>
                        <section>
                            {selectedType && (
                                
                                <Accordian title={Component.title} content={Component.component}/>
                            )}
                            {/* <Accordian title="Setup Imports" content={(<Imports />)}/>
                            <Accordian title="Questions" content={(<Questions />)}/>
                            <Accordian title="Testing" content={(<Testing />)}/> */}
                        </section>
                        <div className="mt-[1rem] flex gap-[0.5rem] justify-end">
                            <button type="submit" className="bg-blue-500 text-white border border-gray-400 rounded-lg px-3 py-1 shadow-md hover:bg-green-500 mx-2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <StepList steps={STEPS} topics={TOPICS} />
            </div>
        </>
    )
}