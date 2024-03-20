import React, { useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

const NewTask = () => {
    const [inputNew, setInputNew] = useState("")
    const [addTask, setAddTask] = useState([])
    const [active, setActive] = useState(false)


    const addItem = (e) => {
        if (inputNew !== '') {
            setAddTask([inputNew, ...addTask])
            setInputNew('')
        } else {
            return alert('No puede ingresar tarea con campo vacio!')
        }
    }

    function completeTask() {
        setActive(!active)

        /* onClick={() => setAddTask(addTask.filter((task, indexCurrent) => { return index !== indexCurrent } */
    }


    return (
        <div className='d-flex 
        flex-column 
        align-items-center'>
            <div className='input-box d-flex justify-content-start 
            rounded-4 
            p-2' style={{
                    width: '600px',
                    height: '80px',
                    backgroundColor: 'rgb(201, 201, 201, 0.7)',
                    position: 'relative'
                }}>

                {/* INPUT */}
                <input
                    id='name'
                    className='ms-3
                    me-2'
                    type="text"
                    onChange={(e) => { setInputNew(e.target.value) }}
                    value={inputNew}
                />
                <label htmlFor='name' className='ms-3 me-2'>Ingrese texto</label>

                {/* BUTTON INPUT */}
                <button
                    className='d-flex
                    justify-content-center
                    align-items-center
                    btn btn-success 
                    rounded-4 '
                    onClick={addItem}
                    style={{
                        height: '55px',
                        position: 'absolute',
                        right: 20,
                        top: 12,
                        fontSize: '40px'
                    }}
                >
                    <IoAddCircleOutline />
                </button>
            </div>

            <div className="rounded
            d-flex
            flex-column
            justify-content-end 
            mt-3 
            p-3"
                style={{
                    width: '600px',
                    minHeight: '95px',
                    backgroundColor: 'rgb(201, 201, 201, 0.95)',
                    boxShadow: '0px 10px 20px 0px black',
                    fontFamily: 'Georgia, Times New Roman, Times, serif',
                    fontSize: '100%'
                }}>

                <div>
                    {addTask.map((item, index) => {
                        return (
                            <div className='d-flex rounded 
                            justify-content-between
                            align-items-center
                            border border-success
                            p-2
                            mb-2'
                                style={{ backgroundColor: 'rgb(235, 235, 235)' }}>
                                <p
                                    key={index}
                                    style={{
                                        overflowWrap: 'anywhere',
                                        textDecoration: active ? 'line-through' : ''
                                    }}>
                                    {item}
                                </p>
                                <div className='d-flex flex-row'>
                                    <button className={`d-flex
                                    justify-content-center
                                    align-items-center
                                    btn btn-${active ? 'success' : 'outline-success'}`}
                                        onClick={completeTask}
                                        style={{ fontSize: '20px' }}>
                                        <IoCheckmarkCircleOutline />
                                    </button>
                                    <button className='d-flex
                                    justify-content-center
                                    align-items-center 
                                    btn btn-outline-danger
                                    ms-2'
                                        onClick={() => setAddTask(addTask.filter((task, indexCurrent) => { return index !== indexCurrent }
                                        ))}
                                        style={{ fontSize: '20px' }}>
                                        <IoCloseCircleOutline />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='border-top border-success' style={{ maxHeight: '20px' }}>
                    <p className="edit-p">{addTask.length} taks</p>
                </div>
            </div>

        </div>
    )
}

export default NewTask