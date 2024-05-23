// import React from 'react'

// const Gpt3 = ({ onNext, onChange }) => {
//     return (
//         <div>
//             <div>gpt step 3</div>
//             <input type="text" name="a1" onChange={onChange} />
//             <button onClick={onNext}>Next</button>
//         </div>
//     )
// }

// export default Gpt3

const Gpt3 = () => {
    return (
        <div className={styles.parentContainer}>
            {/* top selection */}
            <h2 className={styles.heading}>Prompt File</h2>

            {/* fieldContainer top */}
            <div className={styles.field}>
                <div className={fieldType}>*GPT prompt type</div>
                <i className={styles.info}>Select what type of GPT prompt this is.</i>
            </div>

        </div>
    )
}

export default Gpt3