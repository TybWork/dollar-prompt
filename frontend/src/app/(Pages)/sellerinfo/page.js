'use client'
import styles from '@/app/(Pages)/sellerinfo/sellerinfo.module.css'
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea';
import InputField from '@/app/Components/(liteComponents)/InputField/InputField';
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo';
import ImageUploader from '@/app/Components/(liteComponents)/ImageUploader/ImageUploader';
import GradientButton from '@/app/Components/GradientButton/GradientButton';
const page = () => {
    return (
        <div className={styles.container}>

            {/* profile image */}
            <div>
                <FieldInfo title="Upload Profile Image" />
                <ImageUploader labelFor="profileImage" containerWidth="100px" containerHeight="100px" iconWidth="50px" iconHeight="50px" />
            </div>
            {/* banner image */}
            <div>
                <FieldInfo title="Upload Banner Image" />
                <ImageUploader labelFor="banner" containerWidth="100%" containerHeight="150px" iconWidth="70px" iconHeight="70px" />
            </div>
            {/* profileHandle */}
            <div>
                <FieldInfo title="Profile Handle" />
                <InputField placeholder="@profilehandle" />
            </div>

            {/* description */}
            <div>
                <FieldInfo title="Profile Description" />
                <TextArea placeholder="Short Profile description...." rows={10} margin="0px" />
            </div>

            <div className={styles.submitBtn}>
                <GradientButton title="Submit" />
            </div>

        </div>
    )
}

export default page;