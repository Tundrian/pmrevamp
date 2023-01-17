import { useState } from 'react'
import { Accordian } from '../components/createProject/Accordian'
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import { Config } from '../components/configureModule/Config'

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
                        <div className="mb-4 flex">

                            <label htmlFor="">Select Module</label>
                            <select name="" id="">
                                <option value="">Company</option>
                                <option value="">General Ledger</option>
                                <option value="">Accounts Receivable</option>
                            </select>
                        </div>
                        <section>
                            <Accordian title="Config" content="test content"/>
                            <Accordian title="Setup Imports" content="test content"/>
                            <Accordian title="Questions" content="test content"/>
                            <Accordian title="Testing" content="test content"/>
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