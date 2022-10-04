import React, { useState } from 'react';
import {Note} from './models/note.model';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import NotesList from './components/NotesList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CreateNotes from './components/CreateNotes';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [notes, setNotes] = useState<Note[]>([{
  id: "6166871",
  title: "hello world",
  text: "this is a description of the blog and blog is pubished in the bytebot",
  color: "#dfdfdf",
  date: (new Date).toString() 
}]);
  return (
    <>
    <Header></Header>
    <Container className='my-5'>
      <Row>
        <Col className='my-5'>
        <NotesList notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
