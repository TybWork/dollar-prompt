import styles from '@/app/(Pages)/sell/fourthstep/SelectCounry.module.css'
import DropDownList from '@/app/Components/(liteComponents)/DropDownList/DropDownList';
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import countriesArr from '@/app/jsonFiles/countries';
import Link from 'next/link';
import { useState } from 'react';
const SelectCountry = () => {
    const [country, setcountry] = useState(countriesArr[0].name)
    console.log(country)
    return (
        <div className={styles.parentContainer}>
            <h2 className={styles.heading}>Enable payouts</h2>
            <p className={styles.info}>Connect your bank account with Stripe to start receiving payouts from PromptBase for sales of your prompts.
            </p>
            <div className={styles.field}>
                <div className={styles.fieldTitle}>Country of residence
                </div>
                <div className={styles.fieldHelp}>We need to know this for sending payouts. Please read our <Link href="/support">FAQ</Link> if your country does not appear here.
                </div>

                {/* countries dropdown */}
                <DropDownList options={countriesArr} value={country} onChange={setcountry} />

                {/* next button proceed to payouts */}
                <div className={styles.btnContainer}>
                    <GradientButton title="Enable Payouts" />
                </div>
            </div>

        </div>
    )
}

export default SelectCountry;