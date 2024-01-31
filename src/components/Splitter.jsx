import { useState } from "react"
import BillInput from "./BillInput"

const Splitter = () => {
    const [bill, setBill] = useState("")
    const [tipPercent, setTipPercent] = useState("")
    const [custom, setCustom] = useState("")
    const [people, setPeople] = useState("")
    const [result, setResult] = useState("0.00")

    const handleBill = (e)=>{
        setBill(e.target.value)
    }

    const handleCustom = (e) => {
        setCustom(e.target.value)
    }


    const handleTip = (e) => {
        setTipPercent(e.target.name)
        
      }


    const handlePeople = (e)=>{
        setPeople(e.target.value)
    }

    const tipPerPerson = (bill, tipPercent, people) => {
        const billAmount = parseInt(bill)
        const tipAmount = parseInt(tipPercent)
        const totalPeople = parseInt(people)

        return(tipAmount/100)*billAmount/totalPeople
    }

    const handleResult = ()=> {
        setResult(tipPerPerson(bill, tipPercent, people))
    }


    return(
        <>
        <BillInput
        handleBill = {handleBill}
        bill = {bill}
        people = {people}
        handleTip = {handleTip}
        tipPercent = {tipPercent}
        handlePeople = {handlePeople}
        tipPerPerson = {tipPerPerson}
        handleResult = {handleResult}
        custom = {custom}
        handleCustom = {handleCustom}
        result= {result}

        />
        </>
    )
    }

export default Splitter