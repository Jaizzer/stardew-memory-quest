import { useEffect, useRef, useState } from 'react';
import backgroundMusic from './assets/background-music.mp3';
import buttonClickSfx from './assets/button-click.wav';

export default function BackgroundMusicButton({ areSfxEnabled }) {
    const [isPlaying, setIsPlaying] = useState(true);
    const backgroundMusicRef = useRef(new Audio(backgroundMusic));

    const buttonClickSfxRef = useRef(new Audio(buttonClickSfx));

    // Play background music on first re-render
    useEffect(() => {
        backgroundMusicRef.current.play();
    }, [])

    function handleClick() {
        // Play button sound fx if sfx are enabled
        if (areSfxEnabled) {
            buttonClickSfxRef.current.play();
        }

        if (backgroundMusicRef.current.paused) {
            backgroundMusicRef.current.play();
            setIsPlaying(true);
        } else {
            backgroundMusicRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <>
            <button className="bg-music-switch" onClick={handleClick}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </>
    );
}
