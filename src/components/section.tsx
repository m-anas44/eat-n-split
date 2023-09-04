'use client'
import React, { useEffect, useState } from 'react'
import { getPassFunction, setArguFunction } from './argument';

const Section = (props: any) => {

  const [inputVal, setInputVal] = useState(0)
  const [inputVal2, setInputVal2] = useState(0)
  const [result, setResult] = useState(0);
  useEffect(() => {
    const subtractionResult = inputVal - inputVal2;
    setResult(subtractionResult);
  }, [inputVal, inputVal2])

  const [selectState, setSelectState] = useState();
  let oweVar: any;
  function splitFunction() {

    if (selectState == 'you') {
      oweVar = `${props.name} owe you $${result}`;

    }
    if (selectState == `${props.name}`) {
      oweVar = `You owe ${props.name} $${result}`;

    }
  }
  let passID = props.id;
  return (
    <div id={props.id}>
      <h2 className='font-bold text-3xl text-gray-600'>Split a bill with {props.name}</h2>
      <div className="mt-6 flex flex-col gap-y-2">
        <div className='flex justify-between'>
          <p className='font-semibold text-gray-700'>Bill Value</p>
          <input type="number"
            value={inputVal}
            className='focus:outline-none text-center max-w-[8rem] rounded border border-orange-200 p-1'
            onChange={(e: any) => setInputVal(e.target.value)} />
        </div>
        <div className='flex justify-between'>
          <p className='font-semibold text-gray-700'>Your Expense</p>
          <input type="number"
            value={inputVal2}
            onChange={(e: any) => { setInputVal2(e.target.value) }}
            className='focus:outline-none text-center max-w-[8rem] rounded border border-orange-200 p-1' />
        </div>
        <div className='flex justify-between'>
          <p className='font-semibold text-gray-700'>{`${props.name}`} Expense</p>
          <input type="number"
            value={result}
            disabled
            className='focus:outline-none max-w-[8rem] text-center rounded border border-orange-200 p-1' />
        </div>
        <div className='flex justify-between'>
          <p className='font-semibold text-gray-700'>Who is paying bill</p>
          <select
            onChange={(e: any) => setSelectState(e.target.value)}
            className='focus:outline-none text-center w-[8rem] rounded border border-orange-200 p-1'>
            <option disabled selected>-- Select --</option>
            <option value="you">You</option>
            <option value={`${props.name}`}>{props.name}</option>
          </select>
        </div>
        <button type='button'
          onClick={() => {
            splitFunction()
            setArguFunction(oweVar, passID)
            getPassFunction()
            props.setOpenSection(false)
          }}
          className='focus:outline-none text-sm w-[8rem] font-semibold ml-auto rounded bg-orange-300 mt-3 py-1'>
          Split Bill
        </button>
      </div>

    </div>
  )
}
export default Section