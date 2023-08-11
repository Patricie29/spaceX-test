
import styles from './Launch.module.css'
import moment from 'moment'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Launch = ({ props }) => {

    const id = props.id

    return <>

        <div className={styles.card}>
            <h3>{props.name}</h3>

            <p className={styles.description}>Launching the future.</p>

            <div className={styles.flightInfo}>
                <div className={styles.date}>
                    <CalendarMonthIcon className={styles.ikon} />
                    <p> {moment(props.date_utc).format('MMM Do YY')}</p>
                </div>
                <div className={styles.flightInfoDetails}>
                    <AccessTimeIcon className={styles.ikon} />
                    <p> {moment(props.date_utc).format('h:mm a')}</p>
                </div>
            </div>

            <hr />

            <div className={styles.flightInfo}>

                <div className={styles.flightInfoDetails}>
                    <FingerprintIcon className={styles.ikonStamp} />
                    <p>  {id.substring(0, 4)}...{id.substring(id.length - 4)}
                    </p>
                </div>

                <div className={styles.flightInfoDetails}>
                    <FlightTakeoffIcon className={styles.ikon} /> #{props.flight_number}
                </div>

            </div>
        </div >

    </>

}

export default Launch