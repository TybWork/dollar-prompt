'use client'
import styles from '@/app/(Pages)/admin/admin.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import ReviewCard from '@/app/Components/reviewCard/reviewCard'
const page = () => {
    const router = useRouter();
    const [isAdmin, setisAdmin] = useState(false)
    const [prompt, setprompt] = useState('')
    const [promptData, setpromptData] = useState([])

    function selectCategory(e) {
        const category = e.target.value;
        if (category == 'dalle') {
            setprompt(category)
        }
    }

    useEffect(() => {
        const token = document.cookie;
        if (token) {
            const decodeCookie = jwtDecode(token);
            const userRole = decodeCookie.userRole;

            if (userRole == 'admin') {
                setisAdmin(true);
            } else {
                setisAdmin(false);
                router.push('/');
            }
        } else {
            setisAdmin(false);
            router.push('/login');
        }

        const fetchData = async () => {
            const response = await axios.get(`http://localhost:4001/api/admin/getprompt?status=pending&&promptType=Dall-E`, {
                withCredentials: true
            })
            setpromptData(response.data)
        }
        fetchData()

    }, [router]);

    if (!isAdmin) return null

    return (
        <div className={styles.parentContainer}>
            <select onChange={selectCategory} className='select' defaultValue="select category" name="categories" id="categories">
                <option key="select category" value="select category" disabled>Select Category</option>
                <option value="dalle" key="dalle">Dalle Prompts</option>
                <option value="midjourney" key="midjourney">Midjourney Prompts</option>
            </select>

            {/* prompts type */}
            <div className={styles.promptsContainer}>
                {
                    promptData.map((e, index) =>
                        <ReviewCard key={index} label={e.promptType} image={e.Image_Url[0]} description={`${e.description.slice(0, 48)}...`} onClick={() => router.push(`/admin/review/dalle/${e._id}`)} />
                    )
                }
            </div>
        </div>
    )
}

export default page