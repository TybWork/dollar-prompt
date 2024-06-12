'use client'
import axios from 'axios';
// import post from '@/app/Services/ApiEndpoint'
import { post } from '@/app/Services/ApiEndpoint';
import { useState } from 'react';
import styles from '@/app/(Pages)/sellerinfo/sellerinfo.module.css'
import TextArea from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea';
import InputField from '@/app/Components/(liteComponents)/InputField/InputField';
import FieldInfo from '@/app/Components/(liteComponents)/FieldInfo/FieldInfo';
import ImageUploader from '@/app/Components/(liteComponents)/ImageUploader/ImageUploader';
import GradientButton from '@/app/Components/GradientButton/GradientButton';
const page = () => {
    const [data, setdata] = useState({});


    function getValue(val) {
        const { name, value, type } = val.target;
        if (type === "file") {
            // console.log(e.target.files)
            const file = val.target.files
            setdata((prevdata) => ({ ...prevdata, [name]: file }))
        } else {
            // console.log("hello file")
            setdata((prevdata) => ({ ...prevdata, [name]: value }))
        }
    }

    async function onSubmitFunc() {
        const formData = new FormData();
        for (const key in data) {
            if (key === 'profileBanner' || key === 'profileImage') {
                Array.from(data[key]).forEach(file => formData.append(key, file));
            } else {
                formData.append(key, data[key]);
            }
        }

        try {
            // await axios.post("/api/seller/postdata", formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     },
            //     withCredentials: true,
            // });

            await post("/api/seller/postdata", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true,
            });
        } catch (error) {
            console.log("myError is here:", error);
        }
    }

    return (
        <div className={styles.container}>

            {/* profile image */}
            <div>
                <FieldInfo title="Upload Profile Image" />
                <ImageUploader onChangeFunc={getValue} labelFor="profileImage" containerWidth="100px" containerHeight="100px" iconWidth="50px" iconHeight="50px" />
            </div>
            {/* banner image */}
            <div>
                <FieldInfo title="Upload Banner Image" />
                <ImageUploader onChangeFunc={getValue} labelFor="profileBanner" containerWidth="100%" containerHeight="150px" iconWidth="70px" iconHeight="70px" />
            </div>
            {/* profileHandle */}
            <div>
                <FieldInfo title="Profile Handle" />
                <InputField name="profileHandle" onchangeFunc={getValue} placeholder="@profilehandle" />
            </div>

            {/* description */}
            <div>
                <FieldInfo title="Profile Description" />
                <TextArea name="profileDescription" onChange={getValue} placeholder="Short Profile description...." rows={10} margin="0px" />
            </div>

            <div className={styles.submitBtn}>
                <GradientButton title="Submit" onClick={onSubmitFunc} />
            </div>

        </div>
    )
}

export default page;