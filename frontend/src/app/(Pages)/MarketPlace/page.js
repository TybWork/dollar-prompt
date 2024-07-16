'use client'
import Filter from '@/app/Components/Filter/Filter';
import styles from '@/app/(Pages)/Marketplace/Marketplace.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePromptCard from '@/app/Components/SinglePromptCard/SinglePromptCard';
import Loading from '@/app/Components/(liteComponents)/Loading/Loading';
import { useRouter } from 'next/navigation';

const MarketPlace = () => {
  const router = useRouter();
  const [promptData, setPromptData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/prompt/dalle/get');
        setPromptData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(promptData)
  if (!promptData) {
    return <Loading />
  }

  return (
    <div className={styles.mainContainer}>
      <Filter />
      <div className={styles.leftContainer}>
        {promptData.map((item) => (
          <SinglePromptCard image={item.Image_Url[0]} label={item.promptType} title={`${item.title.slice(0, 18)} . . .`} price={item.price} onClick={() => { router.push(`/dallprompt/${item._id}`) }} />
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
