import { useState } from 'react'
import { Accordian } from '../components/createProject/Accordian'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { Config } from '../components/configureModule/Config'
import { Imports } from '../components/configureModule/Imports'
import { Questions } from '../components/configureModule/Questions'
import { Testing } from '../components/configureModule/Testing'


export function ConfigureModules() {

    /*
         Make select or add input field
        On module chosen, show accordians for each section
        add fields for each accordian section
        Have state created for each accordian as well
    */
    return (
        <>
            <div className="grid place-items-center">
                <div className="border border-gray-300 text-center rounded w-full">
                    <h1 className="pt-3 text-4xl">Configure Module</h1>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                        <div className="mb-4 flex justify-between flex-col items-start">

                            <label htmlFor="" className="mb-2">Select Module</label>
                            <select name="" id="" className="mb-5 bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">Company</option>
                                <option value="">General Ledger</option>
                                <option value="">Accounts Receivable</option>
                            </select>
                            <label htmlFor="" className="mb-2">Choose checklist type</label>
                            <select name="" id="" className="hover:cursor-pointer mb-5 bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option className="hover:cursor-pointer" value="configuration">Configuration</option>
                                <option className="hover:cursor-pointer " value="setupImpoty">Setup Import</option>
                                <option className="hover:cursor-pointer " value="question">Question</option>
                                <option className="hover:cursor-pointer " value="testing">Testing</option>
                            </select>

                        </div>
                        <section>
                            <Accordian title="Config" content={(<Config />)}/>
                            <Accordian title="Setup Imports" content={(<Imports />)}/>
                            <Accordian title="Questions" content={(<Questions />)}/>
                            <Accordian title="Testing" content={(<Testing />)}/>
                        </section>
                        <div className="mt-[1rem] flex gap-[0.5rem] justify-end">
                            {/* {isFirstStep !== 0 && <button type="button" onClick={back} className="border border-gray-400 rounded-lg px-3 py-1 shadow-md hover:bg-blue-600 hover:text-white mx-2">Back</button>} */}
                            <button type="submit" className="bg-blue-500 text-white border border-gray-400 rounded-lg px-3 py-1 shadow-md hover:bg-green-500 mx-2">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}