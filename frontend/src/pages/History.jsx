// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../contexts/AuthContext'
// import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import HomeIcon from '@mui/icons-material/Home';

// import { IconButton } from '@mui/material';
// export default function History() {


//     const { getHistoryOfUser } = useContext(AuthContext);

//     const [meetings, setMeetings] = useState([])


//     const routeTo = useNavigate();

//     useEffect(() => {
//         const fetchHistory = async () => {
//             try {
//                 const history = await getHistoryOfUser();
//                 setMeetings(history);
//             } catch {
//                 // IMPLEMENT SNACKBAR
//             }
//         }

//         fetchHistory();
//     }, [])

//     let formatDate = (dateString) => {

//         const date = new Date(dateString);
//         const day = date.getDate().toString().padStart(2, "0");
//         const month = (date.getMonth() + 1).toString().padStart(2, "0")
//         const year = date.getFullYear();

//         return `${day}/${month}/${year}`

//     }

//     return (
//         <div>

//             <IconButton onClick={() => {
//                 routeTo("/home")
//             }}>
//                 <HomeIcon />
//             </IconButton >
//             {
//                 (meetings.length !== 0) ? meetings.map((e, i) => {
//                     return (

//                         <>


//                             <Card key={i} variant="outlined">


//                                 <CardContent>
//                                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                         Code: {e.meetingCode}
//                                     </Typography>

//                                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                                         Date: {formatDate(e.date)}
//                                     </Typography>

//                                 </CardContent>


//                             </Card>


//                         </>
//                     )
//                 }) : <></>

//             }

//         </div>
//     )
// }


import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function History() {

    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (err) {
                console.log(err);
            }
        };

        fetchHistory();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB"); // DD/MM/YYYY
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "#ffffffff",
                padding: "90px 40px",
                color: "white",
            }}
        >

            {/* Navbar */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "70px",
                    backgroundColor: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 4,
                    zIndex: 1000,
                    borderBottom: "1px solid rgba(255,255,255,0.1)"
                }}
            >
                <img
                    src="/meetify.png"
                    alt="Meetify"
                    style={{ height: "45px", cursor: "pointer" }}
                    onClick={() => navigate("/home")}
                />

                <IconButton sx={{ color: "white" }} onClick={() => navigate("/home")}>
                    <HomeIcon />
                </IconButton>
            </Box>

            {/* Page Title */}
            <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: "black" }}>
                Recent Meetings
            </Typography>

            {/* If no history */}
            {meetings.length === 0 && (
                <Typography sx={{ opacity: 0.7, fontSize: "1.2rem", color: "black" }}>
                    No meeting history yet...
                </Typography>
            )}

            {/* Meeting History List */}
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 3,
            }}>
                {meetings.map((meeting, i) => (
                    <Card
                        key={i}
                        sx={{
                            background: "rgba(0,0,0,0.8)",
                            backdropFilter: "blur(6px)",
                            borderRadius: "14px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            cursor: "pointer",
                            color: "white",
                            ":hover": {
                                transform: "scale(1.03)",
                                transition: "0.3s",
                                borderColor: "#FF9839",
                            },
                        }}
                        onClick={() => navigate(`/${meeting.meetingCode}`)}
                    >
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#FF9839" }}>
                                Code: {meeting.meetingCode}
                            </Typography>

                            <Typography sx={{ mt: 1 }}>
                                Date: {formatDate(meeting.date)}
                            </Typography>

                            <Typography sx={{ opacity: 0.85 }}>
                                Time: {formatTime(meeting.date)}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
