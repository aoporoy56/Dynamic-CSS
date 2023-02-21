import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MyCard() {
    let [mode, modeHandle] = useState("Dark");
    let dark = {
        background : "black",
        color : "white"
    }
    let light = {
        background : "white",
        color : "black"
    }
    let changeMode = () => {
        (mode === "Dark") ? modeHandle("Light") : modeHandle("Dark");
    }
  return (
    <>
        <Card style={{ width: '18rem' }}>
        <Card.Body style={(mode === "Dark") ? dark : light}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={changeMode}>{(mode === "Dark") ? "Light Mode" : "Dark Mode"}</Button>
        </Card.Body>
        </Card>
    </>
  )
}
