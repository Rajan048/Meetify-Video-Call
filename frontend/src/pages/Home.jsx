import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { IconButton, TextField, Button } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {

    const navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);

    const handleJoinVideoCall = async () => {
        if (!meetingCode.trim()) return;

        try {
            await addToUserHistory(meetingCode);
            navigate(`/${meetingCode}`);
        } catch (err) {
            console.error("History save failed", err);
        }
    };

    return (
        <div>

            {/* Navbar */}
            <div
                style={{
                    width: "100%",
                    height: "70px",
                    backgroundColor: "#1c1717ff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 24px",
                    borderBottom: "1px solid #333",
                    color: "white"
                }}
            >
                <img
                    src="/meetify.png"
                    alt="Meetify Logo"
                    style={{ height: "45px", cursor: "pointer" }}
                    onClick={() => navigate("/")}
                />

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <IconButton
                        onClick={() => navigate("/history")}
                        sx={{ color: "white" }}
                    >
                        <RestoreIcon />
                    </IconButton>
                    <p style={{ color: "white", margin: 0 }}>History</p>

                    <Button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                        variant="outlined"
                        sx={{
                            color: "white",
                            borderColor: "#FF9839",
                            ":hover": { borderColor: "#ffae54", color: "#ffae54" }
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="meetContainer">
                <div className="leftPanel">
                    <h1>Video calls for everyone</h1>
                    <p>Connect, collaborate, and communicate instantly.</p>

                    <div className="joinRow">
                        <TextField
                            onChange={e => setMeetingCode(e.target.value)}
                            label="Enter meeting code"
                            variant="outlined"
                            size="medium"
                        />
                        <Button
                            onClick={handleJoinVideoCall}
                            variant="contained"
                            size="large"
                        >
                            Join
                        </Button>
                    </div>
                </div>

                <div className="rightPanel">
                    <img src="/logo3.png" alt="Video Call Illustration" />
                </div>
            </div>

        </div>
    );
}

export default withAuth(HomeComponent);
