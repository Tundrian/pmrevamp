import { FormWrapper } from "./FormWrapper"
import {AiOutlineCloseSquare} from 'react-icons/ai'

export function ModuleSelection({customer, projectName, modules, modulesChosen, updateFields, csmName, csmEmail, }) {

    return <FormWrapper title="Customer & Modules">
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="customer">
                Customer
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Customer Name" value={customer} onChange={e => updateFields({customer: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="customer">
                Project Name
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="username" type="text" placeholder="Project Name" value={projectName} onChange={e => updateFields({projectName: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="customer">
                CSM Name
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="username" type="text" placeholder="Project Name" value={projectName} onChange={e => updateFields({projectName: e.target.value})} />
        </div>
        <div className="mb-4 flex">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="customer">
                Project Name
            </label>
            <input className="drop-shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="username" type="text" placeholder="Project Name" value={projectName} onChange={e => updateFields({projectName: e.target.value})} />
        </div>
        <div className="mb-4 flex relative">
            <label className="text-gray-700 text-xl mb-2 px-3 w-64 text-start" htmlFor="username">
                Modules
            </label>
            <select name="" id="" className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-start">
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