'use client';
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import { TextArea } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root size ="2" placeholder = "Title"/>
        <TextArea placeholder="Description" />
        <Button>Submit New Issue</Button>

    
    </div>
  )
}

export default NewIssuePage