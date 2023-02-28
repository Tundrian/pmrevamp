import { useState } from 'react'
import './index.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import homepageBanner from '../public/images/homepage-banner.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App min-h-screen w-screen">
      <section className=" max-w-[500px] m-auto p-5">
        <h1 className="text-center  ">Intacct Project Management</h1>
        <p className="text-justify py-3 max-w-[500px] m-auto">Ab fugit tempora ducimus ullam quod earum illum maiores neque voluptatum aliquid esse accusantium, porro voluptatem doloremque necessitatibus aspernatur quis nam? Deleniti minus rem nisi vitae maiores?</p>
        <div className="grid grid-flow-col gap-2 ">
          <Link to={`createProject`} className="ml-auto">
            <Button variant="primary">
              Create Project
            </Button>
          </Link>
          <Link to={`viewProjects`} className="mr-auto">
            <Button variant="secondary">
              View Projects
            </Button>
          </Link>
        </div>
      </section>
      <section className="max-h-[500px] flex flex-row bg-slate-700 px-5">
        <div className="text-white my-auto">
          <h2 className="mb-3 text-green-400">Project Management</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur cumque nostrum autem deserunt non sit libero soluta aperiam rerum.s</p>
        </div>
        <img className="object-contain h-[300px]" src={homepageBanner} />
      </section>

    </div>
  )
}

export default App
