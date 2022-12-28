
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const JoinForm = ({ }) => {
  // create state variables for each input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [occupation, setOccupation] = useState('');
  const [extra, setExtra] = useState('');
  

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log(name, email, state, occupation, extra);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField sx={{width: "49%", marginRight: "2%"}}
        label="Name" 
        variant="filled"
        required 
        value={name}
        margin="normal"
        onChange={e => setName(e.target.value)}
      />
      <TextField sx={{width: "49%"}}
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        margin="normal"
        onChange={e => setEmail(e.target.value)}
      />
      <br></br>
      <TextField sx={{width: "49%", marginRight: "2%"}}
        label="State"
        variant="filled"
        type="state"
        required
        value={state}
        margin="normal"
        onChange={e => setState(e.target.value)}
      />
      <TextField sx={{width: "49%"}}
        label="Occupation"
        variant="filled"
        type="occupation"
        required
        value={occupation}
        margin="normal"
        onChange={e => setOccupation(e.target.value)}
      />
      <br></br>
      <TextField sx={{width: "100%"}}
        label="What area would you like to represent? Some options include: your hospital, your multi-site hospital system, 
        the floor you work on, etc."
        variant="filled"
        type="extra"
        multiline
        rows={5}
        value={extra}
        margin="normal"
        onChange={e => setExtra(e.target.value)}
      />
      <div className="form-buttons">
        <Button variant="contained">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default JoinForm;