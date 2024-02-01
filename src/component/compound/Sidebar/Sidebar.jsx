import { SidsebarData } from "./SidebarData"
import styles from './Sidebar.module.scss'
import logo from '../../../assets/agbalumotunesLogo.svg'
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className={styles.SidebarContainer}>
        <div className={styles.SidebarLogo}>
            <img src={logo}/>
        </div>
        <section  className={styles.SidebarListItemContainer}>
            {SidsebarData.map((data)=>{
                return(
                    <main key={data.id}>
                        <Link to={`/${data.url}`}
                        style={{textDecoration:'none', color:'inherit'}}
                        >
                            <div className={styles.SidebarListItem}>
                                <img src={data.icon}/>
                                <p>{data.text}</p>
                            </div>
                        </Link>
                    </main>
                )
            })}
        </section>
    </div>
  )
}

export default Sidebar