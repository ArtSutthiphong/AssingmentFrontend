import React from 'react';
import styles from '../styles/styles.module.css'
import styNav from '../styles/stylesNav.module.css'
import styTxt from '../styles/stylesTxt.module.css'
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaPatreon, FaInstagram, FaDev, FaKeycdn, FaKeybase, FaSlideshare, FaReact, FaRegClock } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdLocationOn } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const email = "contact@domain.com";
const address = "JI. Sunset Road No.815, Kuta, Bali 80361";
const telNumber = "(021) 231-2870";
const descriptionCard = "Far Far away, behind the word mountains, fat from the contries Vokalia and Consonantia, there live the blind texts.";
const workHours = "8 AM - 7 PM ,Monday - Saturday"

const Screen001 = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className={[styles.row, styles.center].join(' ')} style={{ justifyContent: 'space-between' }} >
        <div className={[styles.column4, styles.center].join(' ')}>
          <div className={styles.row}>
            <p className={styTxt.pharagraph} style={{ display: 'flex' }}>
              <IoMdMail className={styNav.iconPrimary} />{email}
            </p>
            <p className={styTxt.pharagraph} style={{ display: 'flex' }}>
              <MdLocationOn className={styNav.iconPrimary} />{address}
            </p>
          </div>
        </div>
        <div className={[styles.column1, styles.center].join(' ')} style={{ flex: 0.12 }}>
          <div className={styles.row} style={{ justifyContent: 'space-around' }}>
            <FaFacebookF className={styNav.iconSecondary} />
            <FaTwitter className={styNav.iconSecondary} />
            <FaPatreon className={styNav.iconSecondary} />
            <FaInstagram className={styNav.iconSecondary} />
          </div>
        </div>
      </div>

      <hr className={styles.hrMain} />

      <div className={[styles.row, styles.center].join(' ')} style={{ justifyContent: 'space-between' }} >
        <div className={[styles.column2, styles.center].join(' ')}>
          <h2 className={[styTxt.logoHeader].join(' ')} style={{ display: 'flex' }}>
            <FaDev className={styNav.iconPrimary} size={26} />
            Financerr
          </h2>
        </div>
        <div className={styles.column2} />
        <div className={[styles.column6, styles.center].join(' ')} style={{ flex: 0.45 }}>
          <div className={styles.row} style={{ justifyContent: 'space-around' }}>
            <p className={styTxt.pharagraphBold} style={{ display: 'flex' }}>
              Home <MdKeyboardArrowDown className={styNav.iconSecondary} />
            </p>
            <p className={styTxt.pharagraphBold} style={{ display: 'flex' }}>
              About Us
            </p>
            <p className={styTxt.pharagraphBold} style={{ display: 'flex' }}>
              Services
            </p>
            <p className={styTxt.pharagraphBold} style={{ display: 'flex' }}>
              Pages <MdKeyboardArrowDown className={styNav.iconSecondary} />
            </p>
            <p className={styTxt.pharagraphBold} style={{ display: 'flex' }}>
              Contact <MdKeyboardArrowDown className={styNav.iconSecondary} />
            </p>
          </div>
        </div>
        <div className={[styles.column2, styles.center].join(' ')} style={{ flex: 0.15, borderLeft: '1px solid rgb(0, 0, 0, 0.1)' }}>
          <div className={styles.row} style={{ height: '70px' }}>
            <div className={[styles.column3, styles.center].join(' ')}>
              <BsTelephoneFill className={styNav.iconPrimary} size={24} style={{ marginLeft: '20px' }} />
            </div>
            <div className={[styles.column7, styles.center].join(' ')}>
              <p className={styTxt.pharagraph}>Free Consulation</p>
              <p className={styTxt.pharagraphBold}>{telNumber}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styNav.mainImage}>
        <div className={[styles.row, styNav.cardOverlay].join(' ')}>
          <div className={styles.column5} style={{ padding: '15% 0%' }}>
            <p className={styTxt.mainQuote} style={{ fontSize: 60, fontWeight: 600 }}>Financial Solutions to Advance Your Business</p>
            <p className={styTxt.mainQuote} style={{ fontSize: 16, lineHeight: 1.75 }}>The European languages are members of the same family. Their separate existance is a myth. For science, music, sport, etc. Europe uses the same vocabuary</p>
            <button className={styles.button} onClick={() => { navigate('/users') }} style={{ marginLeft: 30 }}>get a quote</button>
          </div>
        </div>
      </div>

      <div className={[styles.row, styNav.mainCardContainer].join(' ')} >
        <div id='mainCard1' className={styNav.mainCard}>
          <div className={styNav.mainCardIconBackground}>
            <FaReact className={styNav.iconPrimary} size={60} />
          </div>
          <p className={styTxt.pharagraphHeaderMainCard}>Professional Advice</p>
          <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
        </div>
        <div id='mainCard2' className={styNav.mainCard}>
          <div className={styNav.mainCardIconBackground}>
            <FaSlideshare className={styNav.iconPrimary} size={60} />
          </div>
          <p className={styTxt.pharagraphHeaderMainCard} >Fully Independent</p>
          <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
        </div>
        <div id='mainCard3' className={styNav.mainCard}>
          <div className={styNav.mainCardIconBackground}>
            <FaKeybase className={styNav.iconPrimary} size={60} />
          </div>
          <p className={styTxt.pharagraphHeaderMainCard} >Transparant</p>
          <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
        </div>
        <div id='mainCard4' className={styNav.mainCard}>
          <div className={styNav.mainCardIconBackground}>
            <FaKeycdn className={styNav.iconPrimary} size={60} />
          </div>
          <p className={styTxt.pharagraphHeaderMainCard}>Great Support</p>
          <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
        </div>
      </div>

      <div className={[styles.row, styNav.mainServices].join(' ')}>
        <div className={styles.column3} style={{ padding: 20, flex: 0.25 }}>
          <p className={styTxt.pharagraphHeaderMainCard} style={{ color: 'var(--PrimaryColor)' }}>Services</p>
          <p className={styTxt.pharagraphHeaderMainCard} style={{ fontSize: 30 }}>Explore What We Offer</p>
          <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
          <button className={styles.button}>view all</button>
        </div>
        <div className={styles.column6}>
          <div className={styNav.mainServiceCardContainer}>
            <div id='mainServiceCard1' className={[styles.row, styNav.mainServiceCard].join(' ')}>
              <div className={styles.column3} >
                <FaKeybase className={styNav.iconPrimary} size={60} style={{ margin: 10 }} />
              </div>
              <div className={styles.column7} style={{ overflow: 'hidden' }}>
                <p className={styTxt.pharagraphHeaderMainCard}>Investment Planning</p>
                <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
              </div>
            </div>
            <div id='mainServiceCard2' className={[styles.row, styNav.mainServiceCard].join(' ')}>
              <div className={styles.column3} >
                <FaKeycdn className={styNav.iconPrimary} size={60} style={{ margin: 10 }} />
              </div>
              <div className={styles.column7} style={{ overflow: 'hidden' }}>
                <p className={styTxt.pharagraphHeaderMainCard}>{'Audit & Asurance'}</p>
                <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
              </div>
            </div>
            <div className={styles.break}></div>
            <div id='mainServiceCard3' className={[styles.row, styNav.mainServiceCard].join(' ')}>
              <div className={styles.column3} >
                <FaReact className={styNav.iconPrimary} size={60} style={{ margin: 10 }} />
              </div>
              <div className={styles.column7} style={{ overflow: 'hidden' }}>
                <p className={styTxt.pharagraphHeaderMainCard}>Business Taxation</p>
                <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
              </div>
            </div>
            <div id='mainServiceCard4' className={[styles.row, styNav.mainServiceCard].join(' ')}>
              <div className={styles.column3} >
                <FaSlideshare className={styNav.iconPrimary} size={60} style={{ margin: 10 }} />
              </div>
              <div className={styles.column7} style={{ overflow: 'hidden' }}>
                <p className={styTxt.pharagraphHeaderMainCard}>Accounts Outsourcing</p>
                <p className={styTxt.pharagraphMainCard} >{descriptionCard}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styNav.mainTeamContainer}>
        <p className={[styTxt.pharagraphHeaderMainCard, styles.center].join(' ')} style={{ color: 'var(--PrimaryColor)' }}>Our Team</p>
        <p className={[styTxt.pharagraphHeaderMainCard, styles.center].join(' ')} style={{ fontSize: 30 }}>Meet The Expert</p>

        <div className={styNav.mainTeam}>
          <div id='mainTeamCard1' className={[styles.column, styNav.mainTeamCard].join(' ')}>
            <img src="/images/team1.jpeg" alt="team1" style={{ width: '100%', height: '300px', objectFit: 'cover', borderTopLeftRadius: 30 }} />
            <div className={styles.column} >
              <p className={[styTxt.pharagraphHeaderMainCard, styles.center].join(' ')} style={{ marginBottom: 0 }}>Jennifer Christine</p>
              <p className={[styTxt.pharagraphMainCard, styles.center].join(' ')} >Financial Advisor</p>
            </div>
          </div>
          <div id='mainTeamCard2' className={[styles.column, styNav.mainTeamCard].join(' ')}>
            <img src="/images/team2.jpeg" alt="team2" style={{ width: '100%', height: '300px', objectFit: 'cover', borderTopLeftRadius: 30 }} />
            <div className={styles.column} >
              <p className={[styTxt.pharagraphHeaderMainCard, styles.center].join(' ')} style={{ marginBottom: 0 }}>Regina Clover</p>
              <p className={[styTxt.pharagraphMainCard, styles.center].join(' ')} >Financial Head</p>
            </div>
          </div>
          <div id='mainTeamCard3' className={[styles.column, styNav.mainTeamCard].join(' ')}>
            <img src="/images/team3.jpeg" alt="team3" style={{ width: '100%', height: '300px', objectFit: 'cover', borderTopLeftRadius: 30 }} />
            <div className={styles.column} >
              <p className={[styTxt.pharagraphHeaderMainCard, styles.center].join(' ')} style={{ marginBottom: 0 }}>Barry Adams</p>
              <p className={[styTxt.pharagraphMainCard, styles.center].join(' ')} >Head Office Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styNav.footerContainer}>
        <div className={styles.row}>
          <div className={styles.column3}>
            <h2 className={styTxt.logoHeader} style={{ display: 'flex', marginLeft: 0, color: 'var(--WhiteColor)' }}>
              <FaDev className={styNav.iconPrimary} size={26} />
              Financerr
            </h2>
            <p className={styTxt.pharagraphMainCard} >
              One day however a small line of blind text by the name of Lorem lpsum
              decieded to leave for the far World of Grammar.
            </p>
            <p className={styTxt.pharagraph} style={{ display: 'flex', margin: 0 }}>
              <BsTelephoneFill className={styNav.iconPrimary} style={{ margin: 3 }} />{telNumber}
            </p>
            <p className={styTxt.pharagraph} style={{ display: 'flex', margin: 0, marginTop: 1.75 }}>
              <MdLocationOn className={styNav.iconPrimary} style={{ margin: 3 }} />{address}
            </p>
          </div>
          <div className={styles.column2} style={{ paddingLeft: 40 }}>
            <p className={styTxt.pharagraphMainCard} style={{ color: 'var(--WhiteColor)' }}>Other Pages</p>
            <ul className={styNav.listLink}>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>Home</Link></li>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>About Us</Link></li>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>Services</Link></li>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>Contract</Link></li>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>Project</Link></li>
            </ul>
          </div>
          <div className={styles.column2} style={{ paddingLeft: 40 }}>
            <p className={styTxt.pharagraphMainCard} style={{ color: 'var(--WhiteColor)' }}>Quick Links</p>
            <ul className={styNav.listLink}>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>Privacy Policy</Link></li>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>Term Of Service</Link></li>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>Disclaimer</Link></li>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>Credits</Link></li>
              <li><Link to='/' className={styTxt.pharagraphMainCard}>FAQ</Link></li>
            </ul>
          </div>
          <div className={styles.column3}>
            <p className={styTxt.pharagraphMainCard} style={{ color: 'var(--WhiteColor)' }}>Work Hours</p>
            <p className={styTxt.pharagraph} style={{ display: 'flex', margin: 0, marginTop: 1.75 }}>
              <FaRegClock className={styNav.iconPrimary} style={{ margin: 3 }} />{workHours}
            </p>
            <p className={styTxt.pharagraphMainCard} >Our Support and Sale team is aviable 24/7 to answer your quries</p>
            <button className={styles.button}>call us today</button>
          </div>
        </div>

        <hr className={styles.hrMain} style={{ borderColor: 'var(--DarkGrayColor)' }} />

        <div className={styles.row} style={{ marginTop: 10, justifyContent: 'space-between' }}>
          <p className={[styTxt.pharagraphMainCard, styles.center].join(' ')} >Finance Template Kit by Jogtheme</p>
          <p className={[styTxt.pharagraphMainCard, styles.center].join(' ')} >Copyright {'\u00A9'} 2020. All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default Screen001;
