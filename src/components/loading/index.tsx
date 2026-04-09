import "./index.module.scss";

const VLoading = () => {
    return (
        <div className={"v-loading-container"}>
            <div className={"v-loading-indicator"} />
            <p className={"v-loading-text"}>页面加载中，请稍后...</p>
        </div>
    )
}

export default VLoading;