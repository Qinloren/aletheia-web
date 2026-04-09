import "./index.module.scss";
import React from "react";
import VCard from "@/components/card";
import classNames from "classnames";
import View from "supercons/View";
import Message from "supercons/Message";
import VTag, {type VTagType} from "@/components/tag";

/**
 * 帖子标签属性
 */
interface VPostTagProps {

    /**
     * 标签颜色类型
     */
    type: VTagType;

    /**
     * 标签颜色
     */
    color?: string;

    /**
     * 标签内容
     */
    content: string;
}

/**
 * 帖子卡片属性
 */
interface VPostCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * class列表字符串
     */
    className?: string;

    /**
     * 作者头像地址
     */
    authorAvatar: string;

    /**
     * 作者名称
     */
    authorName: string;

    /**
     * 发布时间
     */
    publishTime: string;

    /**
     * 浏览数量
     */
    viewCount: number;

    /**
     * 评论数量
     */
    commentCount: number;

    /**
     * 帖子标签集合
     */
    tags?: VPostTagProps[];

    /**
     * 帖子封面地址集合
     */
    covers?: string[];

    /**
     * 帖子标题
     */
    title: string;

    /**
     * 帖子内容摘要
     */
    summary: string;

    /**
     * 标签样式字符串
     */
    style?: React.CSSProperties;
}

/**
 * 帖子卡片组件
 * @param props 卡片参数
 * @constructor
 */
const VPostCard: React.FC<VPostCardProps> = (props) => {
    const {
        className,
        style,
        authorAvatar,
        authorName,
        publishTime,
        viewCount,
        commentCount,
        tags,
        covers,
        title,
        summary,
        ...others
    } = props;

    const cls = classNames({
        'v-post-card': true,
        [className as string]: !!className
    });
    const postCardHeader = <div className={"v-post-card-header"}>
        <div className={"post-info-box"}>
            <img src={authorAvatar} alt="" className={"post-auther-avatar"} />
            <h3 className={"post-auther-name"}>{authorName}</h3>
            <span className={"post-publish-time"}>{publishTime}</span>
        </div>
        <div className={"post-stats-box"}>
            <div className={"post-stats-item"}>
                <View size={12} />
                <span>{viewCount}</span>
            </div>
            <div className={"post-stats-item"}>
                <Message size={12} />
                <span>{commentCount}</span>
            </div>
        </div>
    </div>
    const renderTags = () => {
        if (!tags) {
            return "";
        }
        return <div className={"tags"}>
            {tags.map((tag, index) => (
                <VTag key={index} type={tag.type} color={tag.type}>{tag.content}</VTag>
            ))}
        </div>
    }
    const renderCovers = () => {
        if (!covers) {
            return "";
        }
        return <div className={"covers"}>
            {covers.map((cover, index) => (
                <img key={index} src={cover} alt={"cover-" + index} />
            ))}
        </div>;
    }
    return <VCard className={cls} style={style} {...others} header={postCardHeader}>
        <div className={"post-title"}>
            {renderTags()}
            <h4>{title}</h4>
        </div>
        <p className={"post-summary"}>{summary}</p>
        {renderCovers()}
    </VCard>
}

VPostCard.displayName = "VPostCard";

export default VPostCard;