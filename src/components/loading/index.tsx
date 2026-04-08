import styles from "./index.module.scss";

const VLoading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingIndicator} />
            <p className={styles.loadingText}>页面加载中，请稍后...</p>
        </div>
    )
}

export default VLoading;