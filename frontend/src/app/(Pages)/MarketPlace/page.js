import Filter from '@/app/Components/Filter/Filter';
import styles from '@/app/(Pages)/Marketplace/Marketplace.module.css'
import PromptBox from '@/app/Components/(liteComponents)/PromptBox/PromptBox';
import PurchaseCredits from '@/app/Components/PurchaseCredits/PurchaseCredits';
const MarketPlace = () => {
  return (
    <div className={styles.mainContainer}>
      <Filter />
      <div className={styles.leftContainer}>
        {/* <PromptBox /> */}

        {/* purchase credits */}
        <PurchaseCredits />
      </div>
    </div>
  )
}

export default MarketPlace