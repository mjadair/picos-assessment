import "./ProposalForm.css";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import React, { useState, useEffect } from "react";

const options = [
  { value: 'radio1', label: 'Radio 1' },
  { value: 'radio2', label: 'Radio 2' },
  { value: 'radio1xtra', label: 'Radio 1Xtra' },
  { value: 'radio3', label: 'Radio 3' },
  { value: 'radio4', label: 'Radio 4' },
  { value: 'radio5live', label: 'Radio 5 Live' },
  { value: 'radio6music', label: 'Radio 6Music' },
]

const ProposalForm = (props) => {

  const initialState = {
    data: {
      title: '',
      summary: '',
      network: '',
      price: 0,
    }
  }

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const data = { ...formData.data, [e.target.name]: e.target.value };
    setFormData({ data });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    console.log('SUBMITTED FORM DATA: ', formData);
  }

  useEffect(() => {
    setFormData(initialState)
  }, [formSubmitted])

  return <div {...props} className="FormContainer">
    <img className="bbc-logo" src={require('../assets/bbc-logo.svg').default} alt="bbc logo" />
    {formSubmitted ?
      <div className="form-success">
        <h1>FORM SUBMITTED SUCCESSFULLY</h1>
        <p>Click the button below to submit another proposal</p>
        <Button onClick={() => { setFormSubmitted(false) }}>Back to Form</Button>
      </div>
      :
      <form onSubmit={handleSubmit}>
        <TextField label="Proposal Title" name="title" placeholder="Title..." onChange={handleChange} required />
        <TextArea label="Proposal Summary" name="summary" rows="15" placeholder="Summary..." onChange={handleChange} required />
        <div className="dropdown-container">
          <Dropdown label="Intended Network" name="network" options={options} onChange={handleChange} isClearable placeholder="Select Network..." required />
          <div className="image-container">
            {formData.data.network && (
              <img src={require(`../assets/${formData.data.network}.svg`)} alt="network logo" />
            )}
          </div>
        </div>
        <TextField label="Price Per Episode" name="price" type="number" step="0.10" min="1" placeholder="GBP" onChange={handleChange} required />
        <Button>Submit</Button>
      </form>
    }
  </div>
};

export default ProposalForm;
