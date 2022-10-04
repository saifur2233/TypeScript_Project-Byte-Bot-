import * as React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Note} from '../models/note.model'

interface ICreateNotesProps {
    notes : Note[],
setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
  const [error, setError] = useState<string>("");
    const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const getRandomNumber = ()=>{
    let min:number = Math.ceil(999999);
    let max:number = Math.floor(1000000);
    return Math.floor(Math.random() * (max - min) + min).toString();
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void=>{
    e.preventDefault();
    if(titleRef.current?.value === "" || textRef.current?.value === ""){
        return setError("Please, Fill up the required fields!!!");
    }
    setError("");
    setNotes([...notes,{
        id: getRandomNumber(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
    }]);

    (titleRef.current as HTMLInputElement).value ="";
    (textRef.current as HTMLTextAreaElement).value = "";
  }
    return (
    <div>
        <div><h2>Create your blog...</h2></div>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={(e)=>handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" ref={titleRef} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" as="textarea" rows={3} ref={textRef} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
        <Form.Control type="color" id='colorInput' defaultValue='#dfdfdf' title='Choose your color' ref={colorRef} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CreateNotes;