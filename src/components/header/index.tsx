import React from "react";

import styles from "./index.module.scss";
import Search from "supercons/Search";
import {Link } from "react-router-dom";

interface VHeaderProps {
    title: string;
}

const VHeader: React.FC<VHeaderProps> = (props) => {
    return <div className={styles.headerContainer}>
        <div className={styles.headerWarp}>
            <div className={styles.logoBox}>
                <div className={styles.logoIcon}></div>
                <h2 className={styles.logoText}>{props.title}</h2>
            </div>
            <div className={styles.menuBox}>
                <ul className={styles.menu}>
                    <Link to={"/"}>
                        <li className={[styles.menuItem, styles.active].join(' ')}>首页</li>
                    </Link>
                    <Link to={"/articles"}>
                        <li className={styles.menuItem}>文章</li>
                    </Link>
                    <Link to={"/resources"}>
                        <li className={styles.menuItem}>资源</li>
                    </Link>
                    <Link to={"/qas"}>
                        <li className={styles.menuItem}>问答</li>
                    </Link>
                    <Link to={"/ai"}>
                        <li className={styles.menuItem}>AI助手</li>
                    </Link>
                </ul>
            </div>
            <div className={styles.filterBox}>
                <div className={styles.searchBox}>
                    <Search className={styles.searchIcon}/>
                    <input type="text" className={styles.searchInput} placeholder="搜索用户、帖子、内容....."/>
                </div>
            </div>
        </div>
    </div>
}

export default VHeader;