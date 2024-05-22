// const Second = ({ onNext, onSelect }) => {
//     return (
//         <div>
//             <div>Second Step</div>
//             <select name="no name" id="one" onClick={onSelect}>
//                 <option value="gpt">Gpt</option>
//                 <option value="dall">Dall</option>
//             </select>
//             <button onClick={onNext}>Next</button>
//         </div>
//     )
// }

// export default Second

import styles from '@/app/(Pages)/sell/secondstep/Second.module.css'
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo';
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea';

const Second = ({ onNext, onSelect }) => {
    return (
        <div>
            {/* heading */}
            <h2 className={styles.heading}>Prompt Details</h2>

            {/* info text */}
            <div className={styles.infoContainer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aperiam!</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            {/* .............................  */}
            <FieldInfo title="Prompt Type" description="Select the type of prompt you want to sell" />

            {/* promptType */}
            <select className={styles.select} name="promptType" id="" onClick={onSelect}>
                <option key="" value="Dall-E">Dall-E</option>
                <option key="" value="GPT">GPT</option>
            </select>


            {/* name field */}
            <FieldInfo title="Name" description="Suggest a title for this prompt." />
            <input className={styles.textInput} placeholder="Movie to Emoji Generator" type="text" name="" id="" />

            {/* textArea field */}
            <FieldInfo title="Description" description="Describe what your prompt does to a potential buyer. A more detailed description will increase your sales." />
            <TextArea placeholder="Movie to Emoji Generator" rows="3" />

            {/* price */}
            <FieldInfo title="Estimated Price" description="What do you think the price of this prompt should be?" />
            <div className={styles.pricingContainer}>
                <select className={styles.select} name="promptType" id="" onClick={onSelect}>
                    <option key="" value="2.99">$2.99</option>
                    <option key="" value="3.99">$3.99</option>
                    <option key="" value="4.99">$4.99</option>
                    <option key="" value="5.99">$5.99</option>
                    <option key="" value="6.99">$6.99</option>
                </select>
            </div>

            {/* button */}
            <GradientButton title="Next" onClick={onNext} />

        </div>
    )
}

export default Second;