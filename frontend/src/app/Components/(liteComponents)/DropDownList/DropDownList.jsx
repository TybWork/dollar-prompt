import styles from '@/app/Components/(liteComponents)/DropDownList/DropDownList.module.css';

const DropDownList = ({ onChange, options, value }) => {
    return (
        <div>
            <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value)} name="" id="">
                {
                    options.map((option, index) =>
                        <option key={index} value={option.value}>{option.name}</option>
                    )
                }
            </select>
        </div>
    );
};

export default DropDownList;
