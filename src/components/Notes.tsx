import * as React from 'react'
import {Note} from '../models/note.model'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface INoteProps{
    note:Note,
    handleDelete: (id:string)=>void
}

const Notes: React.FunctionComponent<INoteProps> = ({note, handleDelete}) => {
  return (
    <div className='my-3'>
      <Card style={{backgroundColor: note.color}}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
        {note.text}
        </Card.Text>
        <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
        <div className="d-grid gap-2 mt-3">
          <Button variant="danger" className='' onClick={()=> handleDelete(note.id)}>Delete</Button>
          </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Notes;