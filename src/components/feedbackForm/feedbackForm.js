import useInput from "../../hooks/useInput";
import React from "react";
function FeedbackForm() {

    let feedback = useInput();
    let textarea = useInput();
    
    const submitMessage = (e) => {
        e.preventDefault()
      console.log('Theme:', feedback.value)
      console.log('Text:', textarea.value)
    }


    return (
        <form className="FeedbackForm">
            <div>
                <label htmlFor="">
                    Theme: <br/>
                    <input {...feedback} type="text"/>
                </label>
            </div>
            <div>
                <label htmlFor="">
                    Text: <br/>
                    <textarea {...textarea}></textarea>
                </label>
            </div>
            <div className='form__btn'>
                <button type='button' onClick={submitMessage}>Submit</button>
            </div>
        </form>
    )
}

export default FeedbackForm;










//input - theme
//textarea - feedback
//button submit

//on submit - theme and feedback show in console.log