import React, {useRef} from "react";

function PlaySection({gameUrl}) {
    const gameWindowRef = useRef(null);

    const openGameWindow = () => {
        if (!gameWindowRef.current || gameWindowRef.current?.closed) {
            gameWindowRef.current = window.open(
                gameUrl,
                "GameWindow",
            );
        } else {
            gameWindowRef.current.focus();
        }
    };

    return (
        <div className = 'project-section-header' id = 'play-game-button'>
            <h2>Play Game</h2>
            <div className = 'play-game-button'>
                <button onClick = {openGameWindow}>Launch Game</button>
            </div>
        </div>
    );
}

export default PlaySection;