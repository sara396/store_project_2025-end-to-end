import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllReactGames } from "../axios/Gameaxios" ;
export const ShowGameDetails = () => {
    const { id } = useParams();
    const [gameDetails, setGameDetails] = useState(null); // המצב התחלתי הוא null
    const navigate = useNavigate();

    const fetchGameDetails = async () => {

        const response = await getAllReactGames();
        const game = response.data.find((game) => game.gameId == id);

        if (game) {
            setGameDetails(game); // אם נמצא משחק, שומרים אותו ב-state
        } else {
            alert("לא נמצא משחק עם מזהה זה");
            navigate("/home"); // נווט אם לא נמצא משחק
        }
    };

    useEffect(() => {
        fetchGameDetails();
    }, [id]);

    // פונקציה לסגירת החלון
    const handleClose = () => {
        navigate("/home");
    };

    if (gameDetails) {
        return (
            <div style={{
                position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex',
                justifyContent: 'center', alignItems: 'center', zIndex: '1000'
            }}>
                <div style={{
                    backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '80%', maxWidth: '600px'
                }}>
                    <h2 style={{ textAlign: 'center', color: 'gray' }}>{gameDetails.gameName}</h2>
                    <div style={{ borderWidth: '5px',color: 'orange'}}>
                        <h6 style={{ textAlign: 'center' }} className="card-text"><strong>קוד קטגוריה:</strong> {gameDetails.categoryId}</h6>
                        <h6 style={{ textAlign: 'center' }} className="card-text"><strong>מחיר:</strong> {gameDetails.gamePrice}₪</h6>
                        <h6 style={{ textAlign: 'center' }} className="card-text"><strong>כמות במלאי:</strong> {gameDetails.emount}</h6>
                        <h6 style={{ textAlign: 'center' }}><strong>תיאור:</strong> {gameDetails.gameDescription || 'אין תיאור זמין'}</h6>
                    </div>
                    <img style={{ width: '100%', height: '400px' }} src={`https://localhost:7009/${gameDetails.gameImg}.jpg`} alt={gameDetails.gameName}  />
                    <br />
                    <button onClick={handleClose} style={{ marginTop: '20px' }} className="btn btn-outline-dark">חזור</button>
                </div>
            </div>
        );
    }
};
