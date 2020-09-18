import React from "react";
import "./Notesclips.css"
import cancel from "../../assets/Images/cancel.png"

class Notesclips extends React.Component{
    render(){
        return(
            <div className='outerdiv'>
                <div className='heading'>
                    <p className='instruct'>Type notes and click upload</p>
                </div>
                <div className='multinote1'>
                    <div className='middle'>
                        <p className='notes'>Debit the receiver and credit the giver.</p>
                    </div>
                        <img src={cancel} alt='remove' className='cancel'/>
                </div>
                <div className='multinote2'>
                    <div className='middle'>
                        <p className='notes'>Hydrogen bond is stronger than covalent bond.</p>
                    </div>
                        <img src={cancel} alt='remove' className='cancel'/>
                </div>
                <div className='multinote3'>
                    <div className='middle'>
                        <p className='notes'>Mitochondria is the powerhouse of the cell.</p>
                    </div>
                        <img src={cancel} alt='remove' className='cancel'/>
                </div>
                <div className='multinote4'>
                    <div className='middle'>
                        <p className='notes'>Big O represents the time complexity of an algorithm.</p>
                    </div>
                        <img src={cancel} alt='remove' className='cancel'/>
                </div>

            </div>
        )

    }
}

export default Notesclips;