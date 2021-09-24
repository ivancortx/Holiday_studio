import React from 'react'

import telegram from 'assets/images/social_icons/telegram.png'
import youtube from 'assets/images/social_icons/youtube.png'
import instagram from 'assets/images/social_icons/instagram.png'
import twitter from 'assets/images/social_icons/twitter.png'

import styles from './FooterPage.module.scss'

export const FooterPage: React.VFC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactsBlock}>
        <div className={styles.contactsItem}>
          <a href="tel:+380674052889">(067)-405-28-89, Олександр</a>
        </div>
        <div className={styles.messengers}>
          <div>
            <a href="#">
              <img className={styles.icon} src={telegram} alt='telegram'/>
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCILy7xYLKmYfCGZGEIXDAPw">
              <img className={styles.icon} src={youtube} alt='youtube'/>
            </a>
          </div>
          <div>
            <a href="#">
              <img className={styles.icon} src={instagram} alt='instagram'/>
            </a>
          </div>
          <div>
            <a href="#">
              <img className={styles.icon} src={twitter} alt='twitter'/>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; Holiday Studio
      </div>
    </div>
  )
}