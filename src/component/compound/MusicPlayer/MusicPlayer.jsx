import { useRef, useState, useEffect } from 'react';
import styles from './MusicPlayer.module.scss';
import imgprv from '../../../assets/imgprv.svg';
import comment from '../../../assets/comment.svg';
import volume from '../../../assets/volume.svg';
import shuffleW from '../../../assets/shuffleW.svg';
import prev from '../../../assets/prev.svg';
import play from '../../../assets/play.svg';
import next from '../../../assets/next.svg';
import repeatW from '../../../assets/repeatW.svg';

const playlist = [
    { src: 'src/component/compound/MusicPlayer/sample.m4a', title: 'All my life', artist: 'Lil Durk ft Burna Boy & Jcole' },
    { src: 'src/component/compound/MusicPlayer/hello.m4a', title: 'hello Song', artist: 'hello Artist' },
];

const MusicPlayer = () => {
    const audioPlayer = useRef(null);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    useEffect(() => {
        if (audioPlayer.current) {
            audioPlayer.current.play();
        }
    }, [currentSongIndex]);

    const togglePlayPause = () => {
        if (audioPlayer.current.paused) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    };

    const handleNext = () => {
        const nextSongIndex = (currentSongIndex + 1) % playlist.length;
        setCurrentSongIndex(nextSongIndex);
    };

    const handlePrev = () => {
        const prevSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        setCurrentSongIndex(prevSongIndex);
    };

    return (
        <div className={styles.MusicPlayerContainer}>
            <section className={styles.SongDetails}>
                <img src={imgprv} alt="Album Cover"/>
                <div>
                    <h6>{playlist[currentSongIndex].title}</h6>
                    <p>{playlist[currentSongIndex].artist}</p>
                </div>
            </section>
            <section className={styles.playerContainer}>
                <div className={styles.playerActions}>
                    <img src={shuffleW} alt="Shuffle"/>
                    <div className={styles.playFlex}>
                        <img src={prev} alt="Previous Song" onClick={handlePrev}/>
                        <audio ref={audioPlayer} src={playlist[currentSongIndex].src} />
                        <img src={play} alt="Play/Pause" onClick={togglePlayPause}/>
                        <img src={next} alt="Next Song" onClick={handleNext}/>
                    </div>
                    <img src={repeatW} alt="Repeat"/>
                </div>
            </section>
            <section className={styles.commentAndVolume}>
                <img src={comment} alt="Comments"/>
                <img src={volume} alt="Volume Control"/>
            </section>
        </div>
    );
}

export default MusicPlayer;
