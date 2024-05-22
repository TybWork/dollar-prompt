import React from 'react'

const Gpt3 = ({ onNext, onChange }) => {
    return (
        <div>
            <div>gpt step 3</div>
            <input type="text" name="a1" onChange={onChange} />
            <button onClick={onNext}>Next</button>
        </div>
    )
}

export default Gpt3