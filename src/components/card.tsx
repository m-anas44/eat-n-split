"use client";
import React, { useEffect, useState } from 'react'
import pro_pic from "/public/image.jpg";
import Image from "next/image";
import Section from './section';
import { getIdFunction, getPassFunction } from './argument';

const Card = () => {
    const [state, setState] = useState(false);
    const [openSection, setOpenSection] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [id, setId] = useState(2);
    const [todos, setTodos] = useState([
        { name: "Clark", id: 1 },
        { name: "Johnathan", id: 2 },
    ]);

    const section = (id: any) => {
        setOpenSection(!openSection);
        let obj: any = todos.find(item => item.id == id);
        let nameHolder = obj.name;
        return nameHolder;
    };
    const idSection = (id: any) => {
        let obj: any = todos.find(item => item.id == id);
        let idHolder = obj.id;
        return idHolder;
    }

    const [selectedName, setSelectedName] = useState(""); // Store the selected name
    const [selectedId, setSelectedId] = useState(); // Store the selected id
    const handleSectionClick = (id: any) => {
        const name = section(id); // Call the section function
        const idCard = idSection(id);
        setSelectedName(name); // Store the selected name
        setSelectedId(idCard);
    };
    const addItem = () => {
        setId(id => id + 1);
        if (nameInput !== "") {
            setTodos([...todos, { name: nameInput, id: id + 1 }]);
        }
        setNameInput("");
        setState(false);

    };

    const passFunctionValue = getPassFunction();
    const passFunctionId = getIdFunction();
    return (
        <div className="flex max-w-md md:max-w-4xl flex-wrap md:flex-row mx-auto">
            <div className='flex-1 p-4 bg-slate-50'>
                {/* card starts here */}

                {
                    todos.map((item: any, i) => {
                        return (
                            <div key={i}>
                                <div
                                    id={`${i + 1}`}
                                    className="flex items-center gap-x-2 hover:bg-orange-100 rounded transition duration-500 max-w-xs mx-auto p-2">
                                    <Image src={pro_pic} alt="Profile" className="w-11 h-11 rounded-full" />
                                    <div>
                                        <span className="font-bold">{item.name}</span>
                                        <p className="text-xs">{(passFunctionId == item.id) ? [passFunctionValue] : ""} </p>

                                    </div>
                                    <button type="button"
                                        onClick={() => {
                                            section(item.id)
                                            handleSectionClick(item.id)
                                            idSection(item.id)
                                        }}
                                        className="py-1 px-2 bg-orange-300 font-bold rounded ml-auto">
                                        <p className={`${openSection ? "hidden" : "block"}`}>Select</p>
                                        <p className={`${openSection ? "block" : "hidden"}`}>Close</p>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

                {/* add component starts here */}

                <div className='mx-auto max-w-xs mt-5'>


                    <div className={`bg-orange-100 p-2 rounded ${state ? "block" : "hidden"}`}>
                        <div>
                            <h2 className='font-semibold'>Friend Name</h2>
                            <input type="text"
                                placeholder='Enter Name'
                                value={nameInput}
                                onChange={(e: any) => { setNameInput(e.target.value) }}
                                className='p-2 rounded focus:outline-none border border-orange-200 w-full'
                            />
                        </div>
                        <div>
                            <h2 className='font-semibold'>Image Type</h2>
                            <select className='w-full p-2 rounded focus:outline-none border border-orange-200'>
                                <option value="default">Default</option>
                            </select>
                        </div>
                        <div className='flex justify-end mt-2'>
                            <button type='button'
                                onClick={addItem}
                                className='px-14 py-1 bg-orange-300 font-semibold rounded'>
                                Add
                            </button>
                        </div>
                    </div>


                    <div className='flex justify-end mt-3'>
                        <button type='button'
                            onClick={() => { setState(!state) }}
                            className='px-3 py-1 bg-orange-300 rounded font-semibold'>
                            <p className={`${state ? "hidden" : "block"}`}>Add Friend</p>
                            <p className={`${state ? "block" : "hidden"}`}>Close</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <div className={`p-10 bg-orange-100 ${openSection ? "block" : "hidden"}`}>
                    <Section name={selectedName} id={selectedId} setOpenSection={setOpenSection} />
                </div>
            </div>

        </div>
    )
}

export default Card