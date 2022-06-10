import React, { useState, useEffect } from 'react';

import styles from '../styles/styles.module.css'
import styNav from '../styles/stylesNav.module.css'
import styTxt from '../styles/stylesTxt.module.css'

import { ImCross } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";

const ScreenName = 'Screen002';

const Screen002 = () => {
    const [arrayUsers, setarrayUsers] = useState([]);
    const [showUsers, setShowUsers] = useState([]);
    const [searchValue, setsearchValue] = useState('');

    let url = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => {
                console.error('Error:', ScreenName, error);
            })
            .then(response => {
                // console.log('Success:', ScreenName, response);
                setarrayUsers(response);
                setShowUsers(response);
            })
    }, []);

    useEffect(() => {
        setsearchValue(searchValue);
        setShowUsers([]);
        let dummy = [];
        arrayUsers.forEach(user => {
            if (user.name.toLowerCase().indexOf(searchValue) != -1) {
                dummy.push(user)
            }
        });
        setShowUsers(dummy);
    }, [searchValue]);

    let loopUsers = () => {
        let users = showUsers.map(
            (user) =>
                <div key={user.id} className={styNav.userCard}>
                    <h3>{user.name}</h3>
                    <ul>
                        <li><a
                            className={styTxt.pharagraph}
                            style={{ display: 'flex', margin: 0, marginTop: 1.75 }}
                            href={`mailto:${user.email}`}>
                            <IoMdMail className={styNav.iconSecondary} style={{ margin: 3 }} />{user.email}
                        </a></li>
                        <li><a
                            className={styTxt.pharagraph}
                            style={{ display: 'flex', margin: 0, marginTop: 1.75 }}
                            href={`tel:${user.phone}`}>
                            <FaPhoneSquareAlt className={styNav.iconSecondary} style={{ margin: 3 }} />{user.phone}
                        </a></li>
                        <li><a
                            className={styTxt.pharagraph}
                            style={{ display: 'flex', margin: 0, marginTop: 1.75 }}
                            href={`http://${user.website}`} target="_blank">
                            <ImCross className={styNav.iconSecondary} style={{ margin: 3 }} />{user.website}
                        </a></li>
                    </ul>

                </div >
        )
        return <div className={styNav.listUserCards}>{users}</div>
    }

    return (
        <>
            <div className={styles.row} style={{ justifyContent: 'space-evenly' }}>
                <h1>รายชื่อผู้ใช้งาน</h1>
                <div className={styles.center}>
                    <input
                        type="text"
                        value={searchValue}
                        placeholder='ค้นหา...'
                        style={{ height: 28, width: 'auto', alignSelf: 'center' }}
                        onChange={e => { setsearchValue(e.target.value) }} />
                    <ImCross
                        className={styNav.iconSecondary}
                        style={{ position: 'relative', top: 4, left: -25 }}
                        onClick={() => { setsearchValue('') }} />
                </div>
            </div>
            {showUsers && loopUsers()}
        </>
    )
}
export default Screen002;