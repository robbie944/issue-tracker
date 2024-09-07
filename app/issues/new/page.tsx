'use client';
import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextArea } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root size ="2" placeholder = "Title"/>
        <SimpleMDE placeholder="Description" />
        <Button>Submit New Issue</Button>

    
    </div>
  )
}

export default NewIssuePage