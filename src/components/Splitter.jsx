import { useEffect, useState } from "react"
import BillInput from "./BillInput"

const Splitter = () => {
    const [bill, setBill] = useState("")
    const [tipPercent, setTipPercent] = useState("")
    const [custom, setCustom] = useState()
    const [people, setPeople] = useState()
    const [result, setResult] = useState(0.00)
    const [bills, setBills] = useState(0.00)

    const handleBill = (e)=>{
        setBill(e.target.value)
    };

    const handleCustom = (e) => {
        setCustom(e.target.value)
    };


    const handleTip = (e) => {
        setTipPercent(e.target.name)
        
      };


    const handlePeople = (e)=>{
        setPeople(e.target.value)
    };

    const billAmount = parseInt(bill)
    const tipAmount = parseInt(tipPercent)
    const totalPeople = parseInt(people)
    const customTip = parseInt(custom)


    const tipPerPerson = (billAmount, tipAmount, totalPeople,customTip) => {
            let tip = 0
            if(custom>=1 ){
                tip = customTip
            }else{
                tip = tipAmount
            }
             const tipSplit = ((tip/100)*billAmount/totalPeople)


                return tipSplit
    }

    const billPerPerson = (billAmount, tipAmount, totalPeople,customTip) => {
        const billSplit = tipPerPerson(billAmount, tipAmount, totalPeople,customTip) + billAmount/totalPeople
            return billSplit
    }

    const handleResult = ()=> {
        setResult(Math.round((tipPerPerson(billAmount, tipAmount, totalPeople,customTip)+ Number.EPSILON)*100)/100)
        setBills(Math.round((billPerPerson(billAmount, tipAmount, totalPeople,customTip)+ Number.EPSILON)*100)/100)
    } 

    useEffect(() => {
        handleResult()
      }, [bill, tipPercent,custom,people]);


    

    const reset= ()=> {
        setBill("")
        setPeople("")
        setResult(result)
        setBills(bills)
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
        reset={reset}
        bills={bills}
        billPerPerson={billPerPerson}

        />
        </>
    )
    }

export default Splitter