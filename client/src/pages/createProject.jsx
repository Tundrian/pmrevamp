import {useState} from 'react'
import { Link } from 'react-router-dom'

function createProject() {
  const [modulesChosen, setModulesChosen] = useState([])
  const [modules, setModules] = useState(() => ['Company', 'General Ledger', 'Accounts Payable', 'Accounts Receivable'])
  
  return (
    <div>
      <h1 className="">Create Project</h1>
      <div className="">
        <form action="">
          <label htmlFor="" className="">Customer</label>
          <input type="text" />
          <label htmlFor="">Modules</label>
          <select name="" id="" >
            {modules.length ? modules.map((module,i) =>
              <option key={module} onClick={(prev) => setModulesChosen([...prev, module[i]] )} value={module[i]}>{module[i]}</option>             
            ) : ''}
          </select>
          <section className="modulesChosen">
            <ul>
              {modulesChosen.length ? modulesChosen.map((module, i) => 
                <li key={i}>{module[i]}</li>
              ) : ''}
            </ul>
          </section>
          <Link to=""><button>Next</button></Link>
        </form>
      </div>
    </div>
  )
}

export default createProject