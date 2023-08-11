import './App.css';
import { useState, useEffect } from "react";
import Launches from "./components/Launches/Launches";
import { Container, Pagination } from "@mui/material";
import MainPage from './components/MainPage/MainPage';
import LaunchesSkeleton from './components/Launches/LoadingLaunches';

function App() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const apiUrl = 'https://api.spacexdata.com/v4/launches/query';

    function getQueryBody(pageNumber) {
        return {
            query: {
                upcoming: false,
                success: true
            },
            options: {
                page: pageNumber,
                select: {
                    id: 1,
                    name: 2,
                    links: 3,
                    date_utc: 4,
                    flight_number: 5,
                },
                populate: [
                    {
                        path: 'rocket',
                        select: {
                            id: 1,
                            name: 2,
                            type: 3,
                            description: 4,
                            height: 5,
                            diameter: 6,
                            mass: 7,
                            flickr_images: 8,
                        },
                    },
                    {
                        path: 'crew',
                        select: {
                            id: 1,
                            name: 2,
                            agency: 3,
                            image: 4,
                        },
                    },
                    {
                        path: 'payloads',
                        select: {
                            id: 1,
                            name: 2,
                            type: 3,
                            orbit: 4,
                            reference_system: 5,
                            regime: 6
                        }
                    },
                    {
                        path: 'capsules',
                        select: {
                            id: 1,
                            type: 2,
                            status: 3,
                            serial: 4
                        }
                    },
                    {
                        path: 'launchpad',
                        select: {
                            id: 1,
                            name: 2,
                            full_name: 3,
                            locality: 4,
                            region: 5,
                            latitude: 6,
                            longitude: 7,
                            details: 8
                        }
                    }
                ],
                sort: {
                    flight_number: 'desc',
                },
            },
        };

    }

    const fetchData = async (pageNumber) => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(getQueryBody(pageNumber)),
            });

            if (!response.ok) {
                console.log('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData)
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, []);

    const handlePageChange = (newPage) => {
        fetchData(newPage)
        setCurrentPage(newPage);
    }


    return (
        <>
            <div className='backgroundMain'>
                <div className='half-circle-blue' />
                <div className='half-circle-white' />
                <div className='gradient' />
                <MainPage />
            </div>

            <section className='backgroundLaunches' id='launches'>
                <div className='allLaunches'>
                    <p>Total Launches: {data["totalDocs"]}</p>
                    <Pagination
                        count={data["totalPages"]}
                        color="primary"
                        variant="outlined"
                        page={currentPage}
                        onChange={(event, newPage) => handlePageChange(newPage)}
                        showFirstButton
                        showLastButton
                    />
                </div>
                <Container>
                    {data["docs"] ? (

                        <div>
                            <Launches launches={data["docs"]} />
                        </div>
                    ) : (
                        <LaunchesSkeleton />
                    )}
                </Container>
            </section>
        </>
    );
}
export default App;
