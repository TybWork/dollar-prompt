import StepsCounter from "@/app/Components/(liteComponents)/StepsCounter/StepsCounter";
import styles from '@/app/(Pages)/Sell/Sell.module.css'
import SellingProduct from "@/app/Components/SellingProduct/SellingProduct";
import PromptDetails from "@/app/Components/PromptDetails/PromptDetails";


const sell = () => {
    return (
        <>
            <div className={styles.parentContainer}>
                <StepsCounter />
                {/* SellingProduct component */}
                {/* <SellingProduct /> */}

                {/* PromptDetails */}
                <PromptDetails />
            </div>




        </>
    )
}
export default sell;