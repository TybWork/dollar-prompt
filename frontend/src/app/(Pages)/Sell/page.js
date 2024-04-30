import StepsCounter from "@/app/Components/(liteComponents)/StepsCounter/StepsCounter";
import styles from '@/app/(Pages)/Sell/Sell.module.css'
import SellingProduct from "@/app/Components/SellingProduct/SellingProduct";


const sell = () => {
    return (
        <>
            <div className={styles.stepCounterConatiner}>
                <StepsCounter />
            </div>

            {/* SellingProduct component */}
            {/* <SellingProduct /> */}


        </>
    )
}
export default sell;