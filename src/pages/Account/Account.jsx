import Navigation from "../../component/compound/Navigation/Navigation"
import Sidebar from "../../component/compound/Sidebar/Sidebar"
import {  } from "../../component/compound/AlbumCard/Cards"
import styles from './Account.module.scss'
import { Input } from "../../component/UI/input/Input"
import Button from "../../component/UI/Button/Button"
import Modal from "../../component/compound/Modal/Modal"
import { useState } from "react"

const Account = () => {
    const [isModal, setIsModal] = useState(false)
  return (
    <div className={styles.pageWrapper}>
        <Sidebar/>
        <div style={{overflowY: 'auto', maxHeight: '100vh',}}>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <section className={styles.detailsSectioncontainer}>
                    <div style={{marginRight:'auto'}}>
                        <p>Personal Profile</p>
                    </div>
                    <div className={styles.personalProfile}>
                        <Input placeholder='Johndoe@gmails.com'/>
                        <Input placeholder='*************'/>
                        <Input placeholder='John_Doe'/>
                        <div>
                        <Input/>
                        <Input/>
                        </div>
                    </div>
                </section>
                <section className={styles.detailsSectioncontainer2}>
                    <div style={{marginRight:'auto'}}>
                        <p>Payment details</p>
                    </div>
                    <div className={styles.cardDetails}>
                        <div className={styles.cardDetailsInfo}>
                            <p>**** **** **** 1627</p>
                            <Button label="Edit" style={{background:'#0F142B'}} onClick={()=> setIsModal(true)}/>
                            {
                            isModal &&
                            <Modal title="Add card" buttonLabel="Save" confirmColor="#EF6B16" closeModal={()=>setIsModal(false)}>
                                <div className={styles.cardInfoContainer}>
                                    <Input placeholder='John Doe'/>
                                    <Input placeholder='1234 5678 9101 1213'/>
                                    <div className={styles.cardInfoFlex}>
                                        <Input placeholder='10/24'/>
                                        <Input placeholder='678'/>
                                    </div>
                                </div>
                            </Modal>

                            }
                        </div>
                        <Button label="Add card" style={{color:'#EF6B16', background:'transparent'}}/>
                    </div>
                </section>
            </div>

        </div>
    </div>
  )
}

export default Account