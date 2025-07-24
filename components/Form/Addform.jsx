import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { duration } from '@mui/material';
import axios from 'axios';

const Addform = () => {
    const[form,setform]=useState({
        couseTitle:' ',
        desc :' ',
        icon:'',
        duration:0.0,
        fee:0
      })
    
      let print =()=>{
        console.log(form);
        axios.post('http://localhost:8081/addCourse',form).then((res)=>{alert("Succesfully added")}).catch((err)=>{console.log(err)})
      }
      let updateValue=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
      }
  return (
    <>
    <center>
    <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        ></Box>
        <div>
          <br></br>
          <div>
            <TextField
              required
              id="outlined-required"
              label="courseTitle"
              name='courseTitle'
              value={form.courseTitle}
              onChange={updateValue}
             
            />
            </div>
            <br></br>
            <div>
            <TextField
              required
              id="outlined-required"
              label="desc"
              name='desc'
              value={form.desc}
              onChange={updateValue}
            />
            </div>
             <br></br>
             <div>
            <TextField
              required
              id="outlined-required"
              label="icon"
              name='icon'
              value={form.icon}
              onChange={updateValue}
            />
            </div>
             <br></br>
             <div>
            <TextField
              required
              id="outlined-required"
              label="duration"
              name='duration'
              value={form.duration}
              onChange={updateValue}
            />
            </div>
            <br></br>
             <div>
            <TextField
              required
              id="outlined-required"
              label="fee"
              name='fee'
              value={form.fee}
              onChange={updateValue}
            />
            </div>
          </div>
          <Button variant="contained" onClick={print}>Submit</Button>
          </center>
    </>
  )
}

export default Addform