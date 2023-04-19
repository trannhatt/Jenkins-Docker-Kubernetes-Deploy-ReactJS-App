
import styles from './Avatar.module.scss';




function Avatar() {
    return (
        <aside class={styles.wrapper}>
            <img src="https://upload.wikimedia.org/wikipedia/vi/a/a7/Happier_Than_Ever.jpeg" alt="avatar" class={styles.avatar} />
            <p class={styles.name}>Lãnh Hàn Thiên Băng</p>
            <a class={styles.btn}>Chọn ảnh</a>

        </aside>


    );
}

export default Avatar;