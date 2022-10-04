import Head from 'next/head'
import Image from 'next/future/image'
import styles from '../styles/Home.module.css'
import { getInitalProps } from 'next';
import { getGithubApi } from '../config/api';
export default function Home({dataRepos, dataUser}) {
  console.log(dataUser)
  return (
    <div className={styles.container}>
      <div className='ctn'>
        <div className='chd'>
          <div className='header'>
            <div className='header-image'>
              <img src={dataUser.avatar_url} alt='profile image' />
            </div>
            <div className='header-bio'>
              <h5 className='user-name'>{dataUser.login}</h5>
              <p className='bio'>{dataUser.bio}</p>
              <div className='wrap-total'>
                <div className='total-repos total'>
                  <span className='name-total'>Total Repo:</span>
                  <span className='nomor-total number'>{dataUser.public_repos}</span>
                </div>
                <div className='total-follwer total'>
                  <span className='follower-total'>Total Repo:</span>
                  <span className='follower-nomor-total number'>{dataUser.followers}</span>
                </div>
                <div className='total-gists total'>
                  <span className='gists-total'>Total Gist:</span>
                  <span className='gists-nomor-total number'>{dataUser.public_gists}</span>
                </div>
              </div>
            </div>
          </div>
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