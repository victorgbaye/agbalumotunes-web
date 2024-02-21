import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const SeekBar = ({ audioPlayer }) => {
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const progressBarRect = progressBarRef.current.getBoundingClientRect();
      const offsetX = event.clientX - progressBarRect.left;
      const progressBarWidth = progressBarRect.width;
      const newTime = (offsetX / progressBarWidth) * audioPlayer.duration;
      audioPlayer.currentTime = newTime;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={progressBarRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '10px',
        backgroundColor: '#ccc',
        cursor: 'pointer',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          backgroundColor: '#4caf50',
          width: `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '-5px',
          left: `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`,
          transform: 'translateX(-50%)',
          width: '10px',
          height: '20px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      ></div>
    </div>
  );
};

SeekBar.propTypes = {
  audioPlayer: PropTypes.shape({
    currentTime: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};

export default SeekBar;
