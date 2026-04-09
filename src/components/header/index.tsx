import React from "react";

import "./index.module.scss";
import Search from "supercons/Search";
import {Link } from "react-router-dom";

interface VHeaderProps {
    title: string;
}

const VHeader: React.FC<VHeaderProps> = (props) => {
    return <div className={"v-header-container"}>
        <div className={"v-header-warp"}>
            <div className={"logo-box"}>
                <div className={"logo-icon"}></div>
                <h2 className={"logo-text"}>{props.title}</h2>
            </div>
            <div className={"menu-box"}>
                <ul className={"menu"}>
                    <Link to={"/"}>
                        <li className={"menu-item active"}>首页</li>
                    </Link>
                    <Link to={"/articles"}>
                        <li className={"menu-item"}>文章</li>
                    </Link>
                    <Link to={"/resources"}>
                        <li className={"menu-item"}>资源</li>
                    </Link>
                    <Link to={"/qas"}>
                        <li className={"menu-item"}>问答</li>
                    </Link>
                    <Link to={"/ai"}>
                        <li className={"menu-item"}>AI助手</li>
                    </Link>
                </ul>
            </div>
            <div className={"filter-box"}>
                <div className={"search-box"}>
                    <Search className={"search-icon"}/>
                    <input type="text" className={"search-input"} placeholder="搜索用户、帖子、内容....."/>
                </div>
            </div>
        </div>
    </div>
}

export default VHeader;