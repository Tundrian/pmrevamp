import { FormWrapper } from "./FormWrapper"
import {AiOutlineCloseSquare} from 'react-icons/ai'
import Form from 'react-bootstrap/Form'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function ModuleSelection(
    {
        customer, 
        projectName, 
        modules, 
        modulesChosen, 
        updateFields, 
        csmName, 
        csmEmail, 
        clientId,
        sowAttachment,
        goLiveDate,
        status,
        startDate,
        authExpiry,
    }) {
        const [dateStartDate, setDateStartDate] = useState(new Date());
    
    return <FormWrapper title="Customer & Modules">
         
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="customer">
                Customer
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customer" type="text" placeholder="The Company" value={customer} onChange={e => updateFields({customer: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="projectName">
                Project Name
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="projectName" type="text" placeholder="Implementation 0001" value={projectName} onChange={e => updateFields({projectName: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="csmName">
                CSM Name
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="csmName" type="text" placeholder="Jane Smith" value={csmName} onChange={e => updateFields({csmName: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="csmEmail">
                CSM Email
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="csmEmail" type="text" placeholder="something@somethingelse.com" value={csmEmail} onChange={e => updateFields({csmEmail: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="clientId">
                Client ID
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="clientId" type="text" placeholder="clientid" value={clientId} onChange={e => updateFields({clientId: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="sowAttachment">
                SOW
            </label>
                <Form.Control type="file" className="drop-shadow-md appearance-none rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="goLiveDate">
                Go-live Date
            </label>
            <DatePicker selected={goLiveDate} onChange={date => updateFields({goLiveDate: date})}  value={goLiveDate} className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="status">
                Status
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="status" type="text" placeholder="status" value={status} onChange={e => updateFields({status: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="startDate">
                Start Date
            </label>
            <DatePicker selected={startDate} onChange={date => updateFields({startDate: date})}  value={startDate} className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="authExpiry">
                Authorization Expiry Date
            </label>
            <DatePicker selected={authExpiry} onChange={date => updateFields({authExpiry: date})}  value={authExpiry} className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex relative">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="modules">
                Modules
            </label>
            <select name="modules" id="modules" className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-start">
                {modules.length ? modules.map((module, i) =>
                    <option key={module} onClick={() => {
                        return modulesChosen.some(x => x === module) ? updateFields({modulesChosen: [...modulesChosen]}) :  updateFields({modulesChosen: [...modulesChosen, module]})
                    }} value={module}>{module}</option>
                ) : ''}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
        {modulesChosen.length ? (
            <section className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3">
                <ul className="w-full flex flex-col items-start pt-3">
                    {modulesChosen.length ? modulesChosen.map((module, i) =>
                        <li key={i} className="mb-2 border-b w-full flex justify-between py-2 leading-8">
                            <span>{i+1}. {module}</span>
                            <AiOutlineCloseSquare className="text-red-500 text-2xl hover:cursor-pointer hover:text-3xl" onClick={() => updateFields({modulesChosen: [...modulesChosen.filter(x => x !== module)]})} />
                        </li>
                    ) : ''}
                </ul>
            </section>
        ) : ''}
    </FormWrapper>
}