import styles from '@/styles/partner.module.css'
import Animated from './Animated'
import Image from 'next/image'
import firstPartnerImg from '@/images/google-nest.png'
import secondPartnerImg from '@/images/amazon-echo.png'
import thirdPartnerImg from '@/images/philips-hue.png'

export default function Partner() {
    return (
        <div className={styles.partner}>
          <Animated>
            <div className={styles.partner__title}>Наши партнеры</div>
          </Animated>
          <div className={styles.partner__images}>
            <Animated>
              <Image 
                src={firstPartnerImg} 
                alt='google nest'
              />
            </Animated>
            <Animated>
              <Image 
                src={secondPartnerImg} 
                alt='amazon echo'
              />
            </Animated>
            <Animated>
              <Image 
                src={thirdPartnerImg} 
                alt='philips hue'
              />
            </Animated>
          </div>
        </div>
    )
}