
import styles from './MainPage.module.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



const MainPage = () => {

    return <>
        <div className={styles.landingPage}>
            <div className={styles.centeredContent}>
                <h1>SpaceX</h1>
                <h3>From Earth to Stars: SpaceX Adventures</h3>
                <p>Embark on a journey through the cosmos with our SpaceX launches.</p>
                <a href="#launches">
                    <KeyboardDoubleArrowDownIcon fontSize="large" />
                </a>
            </div>
        </div>
    </>

}


export default MainPage