import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaylists } from '../../features/playlist/playlistSlice';
import { PlaylistCard } from '../../component/compound/AlbumCard/Cards';

const PlaylistDisplay = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(state => state.playlist.playlists);
  const status = useSelector(state => state.playlist.status);
  const error = useSelector(state => state.playlist.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlaylists());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* {playlists.map((playlist) => (
        <PlaylistCard key={playlist._id} title={playlist.title} songCount={playlist.tracks.length} />
      ))} */}
      {playlists.map((playlist)=>{
        return(
            <div style={{ flex: '1 0 25%', padding: '10px' }} key={playlist._id} >
                <PlaylistCard title={playlist.title} songCount={playlist.tracks.length} />
            </div>
        )
      })}
    </div>
  );
};

export default PlaylistDisplay;
