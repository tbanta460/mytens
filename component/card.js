import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setDataRepos } from '../config/redux/action/setForm';
const Card = () => {
    const {setData} = useSelector(state => state);
    const {setDataRepos} = setData
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
    return (
        <div className={styles.container}>
            <ul className='list-repos'>
            {
                setDataRepos.map(data => {
                    const isDate = new Date(data.created_at);
                    const isMonth = isDate.getMonth();
                    const isDay = isDate.getDay();
                    const isYear = isDate.getFullYear();

                    const isDateUpdate = new Date(data.updated_at);
                    const isMonthUp = isDateUpdate.getMonth();
                    const isDayUp = isDateUpdate.getDay();
                    const isYearUp = isDateUpdate.getFullYear();
                    return(
                        <li key={data.id} className='list-repo' onClick={() => window.open(data.clone_url, '_blank')}>
                          <Link href={data.clone_url}>
                            <h3 className='name-repo'>{data.name}</h3>
                          </Link>
                            <h5 className='full-name-repo'>{data.full_name}</h5>
                            <div className='wrap-repo'>
                              <div className='branch-repo chd-wrap-repo'>
                                <span className='branch-name'>Branch: {data.default_branch}</span>
                              </div>
                              <div className='language-repo chd-wrap-repo'>
                                <span className='branch-name'>Language: {data.language}</span>
                              </div>
                            </div>
                            <div className='date-repo'>
                              <span className='created'>Created: {`${dayNames[isDay]}, ${monthNames[isMonth]} ${isYear}`}</span>
                              <span className='created'>Update: {`${dayNames[isDayUp]}, ${monthNames[isMonthUp]} ${isYearUp}`}</span>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Card