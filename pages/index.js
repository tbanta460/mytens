import styles from '../styles/Home.module.css'
import { getGithubApi } from '../config/api';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setDataRepos, setDataUser } from '../config/redux/action/setForm';
import Card from '../component/card';
import Header from '../component/header';

export default function Home({dataRepos, dataUser}) {
  const dispatch = useDispatch();
  dispatch(setDataRepos("setDataRepos", dataRepos))
  dispatch(setDataUser("setDataUser", dataUser))
  return (
    <div className={styles.container}>
      <div className='ctn'>
        <div className='chd'>
          <div className='ctn-header'>
            <Header />
          </div>
          <main className='content'>
            <section className='chd-content'>
              <Card />
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps  = async (ctx) => {
  const resRepos = await getGithubApi('tbanta460', '/repos');
  const resData = await getGithubApi('tbanta460', '');
  return{dataRepos: resRepos, dataUser: resData}
}