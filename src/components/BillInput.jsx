import person from '../components/images/person.png'
const BillInput = ({handleBill, bill, handleTip, handlePeople, tipPerPerson, billPerPerson, handleResult, people,result, custom, handleCustom,bills,reset}) => {
   
    return (
    <div className='display'>
        <section className='input'>

            <div className='title'>
                Bill
            </div>

            <input 
                className='bill'
                type='number'
                placeholder="$"
                value={bill}
                onChange={handleBill}
            />

            <div className='select'>Select Tip %</div>

            <div className='tips'>
                <button
                    onClick={handleTip} 
                    className= 'tip amount'  
                    name='5'>5%
                </button>

                <button 
                    className= 'tip amount'
                    onClick={handleTip} 
                    name='10'>10%
                </button>

                <button 
                    className='tip amount' 
                    onClick={handleTip} 
                    name='15'>15%
                </button>

                <button 
                    className='tip amount' 
                    onClick={handleTip} 
                    name='25'>25%
                </button>

                <button 
                    className='tip amount' 
                    onClick={handleTip} 
                    name='50'>50%
                </button>
            

                <input
                    className='tip custom'
                    type='number'
                    placeholder='Custom'
                    value={custom}
                    onChange={handleCustom}
                />
            </div>

            <div className='people'>Number of People</div>
                <input
                    className='people'
                    type='number'
                    onChange={handlePeople}
                    value={people}
                    placeholder='0'/>
        </section>

        <section className='outputs'>
            <div className='tip-header'>Tip Amount<span> /person</span></div>
            <h1 className='tip-display' value={result}>${result}</h1>
            <div className='tip-header'>Total <span>/person</span></div>
            <h1 className='total-display'>${bills}</h1>
            <button className='reset' onClick={reset}>RESET</button>
        </section>
    </div>
    )
}

export default BillInput