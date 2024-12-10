import { useState } from 'react'
import './App.css'
import { TextField, Stack, Button } from '@mui/material'


function App() {

  const [interest, setInterest ] = useState(0)
  const [principle, setPrinciple ] = useState(0)
  const [rate, setRate ] = useState(0)
  const [year, setYear ] = useState(0)
  const [invalidPrinciple, setInvalidPrinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const validateInput = (inputTag)=>{
    console.log(inputTag, typeof inputTag);
    const {name,value} = inputTag
    console.log( !!value.match(/^\d+(\.\d+)?$/));
    console.log( !!value.match(/^\d+(\.\d+)?$/));

    if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d*.?\d+$/)){
        setInvalidPrinciple(false)
      }
      else{
        setInvalidPrinciple(true)
      }
    }
    else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidRate(false)
      }
      else{
        setInvalidRate(true)
      }

    }
    else if(name=='year'){
      setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidYear(false)
      }
      else{
        setInvalidYear(true)
      }
    }

    else{
     
      alert("Enter valid input")
    }
  }

  const handleCalculate = (e)=>{

    e.preventDefault()

    if(principle && rate && year){
      setInterest(principle * rate * year/100)
    }
    else{
      alert("Fill the form completly")
    }
  }
  
  const handleReset = ()=> {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple("")
    setInvalidRate("")
    setInvalidYear("")
  }



  return (
    <>
    <div style={{width:'100%', minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='p-5 bg-light rounded'>
        <h3 className='bg-light p-2 rounded'>Simple Interest Calculator</h3>
        <p className='text-center'>Calculate your Simple Interest Easily !</p>

        <div className='bg-danger p-5 rounded text-center text-white'>
          <h1>₹{interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>

        <form className='mt-5'>

          <div className='my-3'>
            <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id='outlined-principle' label="₹ Principle" variant='outlined'/>
          </div>
          {invalidPrinciple && <div className='text-danger'>Invalid Principle Amount</div>}

          <div className='my-3'>
            <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id='outlined-rate' label="% Rate" variant='outlined'/>
          </div>
          {invalidRate && <div className='text-danger'>Invalid Rate</div>}

          <div className='my-3'>
            <TextField value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id='outlined-year' label="Year" variant='outlined'/>
          </div>
          {invalidYear && <div className='text-danger'>Invalid Year</div>}

          <Stack direction="row" spacing={2}>

          <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} className='mt-3 bg-danger px-4 py-3' variant="contained">CALCULATE</Button>
          <Button onClick={handleReset} className='mt-3 text-danger border-danger px-4 py-3' variant="outlined">RESET</Button>
 
          </Stack>
          

        </form>

      </div>
    </div>
   
    </>
  )
}

export default App
