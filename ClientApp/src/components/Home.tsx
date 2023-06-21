import * as React from 'react';
import { Button, Input } from "reactstrap"
import { useState } from "react";

const Home = () => {
    console.log('Home component loaded')
    const [number1, setNumber1] = useState<string>("");
    const [number2, setNumber2] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const handleSubmit = () => {
        fetch(`weatherforecast/add?num1=${number1}&num2=${number2}`, { method: 'post' })
            .then((response) => response.json())
            .then((data) => {
                setResult(data);
            })
    }
    return (
        <>
            <div className="d-flex align-items-center justify-contain-between">
                <Input placeholder="Enter Number 1" type="number" onChange={(e) => { setNumber1(e.target.value) }}> </Input>
                <Input placeholder="Enter Number 2" type="number" onChange={(e) => { setNumber2(e.target.value) }}> </Input>
            </div>
            <Button className="mt-3 text-center" onClick={handleSubmit}>Submit </Button>

            <div className="mt-3">Result: {result}</div>
        </>
    )
}
export default Home;
