import React, {useEffect, useRef} from "react";
import {Unity, useUnityContext} from 'react-unity-webgl';

function WebGLGame({loaderPath, dataPath, frameworkPath, codePath, gameTitle}) {
    const {unityProvider} = useUnityContext({
        loaderUrl: loaderPath,
        dataUrl: dataPath,
        frameworkUrl: frameworkPath,
        codeUrl: codePath,
    }, [loaderPath, dataPath, frameworkPath, codePath]);

    const canvasContainerRef = useRef();

    useEffect(() => {
                    document.title = 'Jalen Moore | ' + gameTitle;
        }, [gameTitle]);

    return (
        <div>
            <div ref = {canvasContainerRef}>
                <Unity className = 'game-window' unityProvider = {unityProvider} />
            </div>
        </div>
        
    );
}

export default WebGLGame;