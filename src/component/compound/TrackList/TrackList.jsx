import styles from './TrackList.module.scss'

const TrackList = () => {
  return (
    <main className={styles.tableWrapper}>
        {/* <table className={styles.tableWrapper}>
            <pead>
                <tr>
                    <p>Song & Album</p>
                    <p>Duration</p>
                    <p>Price</p>
                    <p>Listeners</p>
                    <p></p>
                </tr>
            </pead>
            <tbody>
                <tr>
                    <td>
                        <img/>
                        <div>
                            <p>City Boys</p>
                            <p>I Told pem</p>
                        </div>
                    </td>
                    <td>3:09</td>
                    <td>£3.99</td>
                    <td>4,000,900,333</td>
                </tr>
            </tbody>
        </table> */}
        <section className={styles.tableHeader}>
            <p>Song & Album</p>
            <p>Duration</p>
            <p>Price</p>
            <p>Listeners</p>
            <p></p>
        </section>
    </main>
  )
}

export default TrackList