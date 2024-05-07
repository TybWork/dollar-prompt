import Filter from '@/app/Components/Filter/Filter';
import styles from '@/app/(Pages)/Marketplace/Marketplace.module.css'
import PromptBox from '@/app/Components/(liteComponents)/PromptBox/PromptBox';
const MarketPlace = () => {
  return (
    <div className={styles.mainContainer}>
      <Filter />
      <div className={styles.leftContainer}>
        <PromptBox />
      </div>
    </div>
  )
}

export default MarketPlace