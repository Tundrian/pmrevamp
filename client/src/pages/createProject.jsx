import React from 'react'

function createProject() {
  return (
    <div>
      <h1 className="text-3xl text-red-500">Create Project</h1>
      <div className="border border-green-600">
        <form action="">
          <label htmlFor="" className="text-3xl text-red-500">Customer</label>
          <input type="text" />
          <label htmlFor="">Modules</label>
          <select name="" id="">
            <option value="">Company</option>
            <option value="">General Ledger</option>
            <option value="">Accounts Payable</option>
            <option value="">Accounts Receivable</option>
          </select>
          <button>Next</button>
        </form>
      </div>
    </div>
  )
}

export default createProject