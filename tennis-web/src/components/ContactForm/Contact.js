import { Button, FormControl, Input, InputLabel, TextareaAutosize } from '@mui/material';

import './Contact.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <div className="name">
        <FormControl className='form-control' style={{ marginBottom: '10px' }}>
          <InputLabel htmlFor="first-name">First Name</InputLabel>
          <Input id="first-name" />
        </FormControl>
        <FormControl className='form-control'>
          <InputLabel htmlFor="last-name">Last Name</InputLabel>
          <Input id="last-name" />
        </FormControl>
      </div>
      <FormControl className='form-control' style={{ marginBottom: '10px' }}>
        <InputLabel htmlFor="email" >Email Address</InputLabel>
        <Input id="email" />
      </FormControl>
      <FormControl className='form-control' style={{ marginBottom: '30px' }}>
        <InputLabel htmlFor="subject">Subject</InputLabel>
        <Input id="subject" />
      </FormControl>
      <FormControl className='form-control' style={{ marginBottom: '30px' }}>
        <TextareaAutosize minRows={10} style={{ padding: '10px', fontSize: '1em', fontFamily: 'sans-serif' }} placeholder="Message..." />
      </FormControl>
      <Button variant='contained' style={{ width: '20%', margin: 'auto' }}>
        Submit
      </Button>
    </form>
  )

}

export default ContactForm;
