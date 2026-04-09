import "./index.module.scss";
import VCard from "@/components/card";
import Components from "supercons/Components";
import Code from "supercons/Code";
import VLabel from "@/components/label";
import VButton from "@/components/button";
import mixins from "@/assets/styles/scss/mixin.module.scss";
import VTag from "@/components/tag";
import VPostCard from "@/components/post-card";

const HomePage = () => {
    return (
        <div className={"home-container"}>
            <div className={"nav-sidebar"}>
                <VCard headerTitle={"板块导航"}>
                    <ul className={"nav"}>
                        <li className={"nav-link active"}>
                            <div className={"nav-link-icon"} style={{
                                background: "#eff6ff",
                                color: "#409eff"
                            }}>
                                <Components size={22} />
                            </div>
                            <p className={"nav-link-text"}>技术交流</p>
                        </li>
                        <li className={"nav-link"}>
                            <div className={"nav-link-icon"} style={{
                                background: "#f0fdf4",
                                color: "#10b981"
                            }}>
                                <Code size={22} />
                            </div>
                            <p className={"nav-link-text"}>编程开发</p>
                        </li>
                    </ul>
                    <div className={"divider-horizontal"}></div>
                    <VLabel color={"linear-gradient(135deg, #f59e0b, #fbbf24)"}>社区统计</VLabel>
                    <div className={"stats"}>
                        <div className={"stats-item"}>
                            <span>今日发帖</span>
                            <span>0</span>
                        </div>
                        <div className={"stats-item"}>
                            <span>总发帖数</span>
                            <span>0</span>
                        </div>
                    </div>
                </VCard>
            </div>
            <div className={"page-content"}>
                <VCard className={"filter-card"}>
                    <div className={"filter-card-content"}>
                        <VLabel color={`linear-gradient(135deg, ${mixins.themeColorDark}, ${mixins.themeColorLight})`} style={{
                            marginBottom: "inherit"
                        }}>帖子列表</VLabel>
                        <div className={"sort-box"}>
                            <VButton size={"small"} type={"primary"}>最新</VButton>
                            <VButton size={"small"} type={"default"}>热门</VButton>
                            <VButton size={"small"} type={"default"}>精华</VButton>
                        </div>
                    </div>
                </VCard>
                <div className="post-list">
                    {/* TODO: 下一步： 完成该部分样式 */}
                    <VPostCard
                        authorAvatar={"https://picsum.photos/200/200"}
                        authorName={"程序员小明"}
                        publishTime={"10分钟前"}
                        viewCount={0}
                        commentCount={0}
                        title={"Vue3 + Element Plus 现代化论坛前端开发实战教程，从零到一打造完整界面"}
                        summary={"从零搭建高颜值论坛系统，包含完整布局、发帖、评论、用户中心功能，适合新手学习"}
                        tags={[
                            {
                                type: "default",
                                content: "技术"
                            },
                            {
                                type: "error",
                                content: "置顶"
                            }
                        ]}
                        covers={[
                            "https://picsum.photos/800/450?1"
                        ]}/>
                </div>
            </div>
            <div className={"tool-sidebar"}>
                <VCard>
                    <VTag type={"default"} >AI总结</VTag>
                    <VTag type={"success"}>AI总结</VTag>
                    <VTag type={"error"}>AI总结</VTag>
                    <VTag type={"warning"}>AI总结</VTag>
                    <VTag type={"custom"} color={"orange"}>AI总结</VTag>
                </VCard>
            </div>
        </div>
    )
}

HomePage.displayName = "HomePage";

export default HomePage;