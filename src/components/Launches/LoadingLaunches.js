import { Grid, Skeleton } from "@mui/material";


const LaunchesSkeleton = () => {

    const launches = 10
    const skeletonComponents = [];

    for (let i = 0; i < launches; i++) {
        skeletonComponents.push(
            <Grid key={i} item xs={10} sm={6} md={4} lg={3}>
                <Skeleton
                    variant="rounded"
                    width={280}
                    height={230}
                    sx={{
                        bgcolor: 'grey.800',
                        marginTop: '1rem'
                    }}
                />
            </Grid>
        )
    }

    return <>
        <Grid container spacing={2} justifyContent="center">
            {skeletonComponents}
        </Grid>
    </>

}


export default LaunchesSkeleton