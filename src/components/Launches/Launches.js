import { Grid } from "@mui/material";
import Launch from "../Launch/Launch";



const Launches = ({ launches }) => {

    return <>
        <Grid container spacing={2} justifyContent={'center'}>

            {launches.map((launch) => (
                <Grid key={launch.id} item xs={10} sm={6} md={4} lg={3}>
                    <Launch props={launch} />
                </Grid>
            ))}

        </Grid>
    </>

}


export default Launches