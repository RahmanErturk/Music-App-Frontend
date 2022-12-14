import { useContext, useEffect } from "react";
import { MusicPlayerContext } from "../context/MusicPlayerProvider";

import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import SongsOverview from "../components/SongsOverview";
import songs from "../data.json";

export default function Artist() {
  const { id } = useParams();

  const { allSongs, setPlaylist } = useContext(MusicPlayerContext);

  const artist = songs.artists.find((a) => a.id === +id);

  const songsOfArtist = allSongs.filter((s) => artist.songs.includes(s.id));

  useEffect(() => {
    setPlaylist(songsOfArtist);
  }, [id]);

  return (
    <div className="Playlist">
      <SongsOverview playlist={songsOfArtist} cover={artist} />
    </div>
  );
}
