import { useState, useMemo } from 'react';
import { usePlayerStore } from '@/store/playerStore';
import { Pause, Play } from '@/icons/PlayerIcons';
import { songs, allPlaylists } from '@/lib/data';

interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);

  // Filtrar y ordenar canciones por relevancia
  const filteredSongs = useMemo(() => {
    const query = searchQuery.trim();
    if (query.length < 2) return [];
    
    const lowerQuery = query.toLowerCase();
    
    // Filtrar canciones (excluyendo favoritos - albumId 1)
    const results = songs
      .filter(song => song.albumId !== 1)
      .filter(song => {
        const title = song.title.toLowerCase();
        const artists = song.artists.join(' ').toLowerCase();
        const album = song.album.toLowerCase();
        
        return title.includes(lowerQuery) || 
               artists.includes(lowerQuery) || 
               album.includes(lowerQuery);
      });
    
    // Ordenar por relevancia: título > artista > álbum
    return results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(lowerQuery);
      const bTitle = b.title.toLowerCase().includes(lowerQuery);
      const aArtist = a.artists.join(' ').toLowerCase().includes(lowerQuery);
      const bArtist = b.artists.join(' ').toLowerCase().includes(lowerQuery);
      
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      if (aArtist && !bArtist) return -1;
      if (!aArtist && bArtist) return 1;
      
      return 0;
    });
  }, [searchQuery]);

  // Reproducir canción
  const handlePlaySong = (song: Song) => {
    const isCurrentSongPlaying = isPlaying && currentMusic?.song?.id === song.id && currentMusic?.song?.albumId === song.albumId;
    
    if (isCurrentSongPlaying) {
      setIsPlaying(false);
      return;
    }

    const isSameAsCurrent = currentMusic?.song?.id === song.id && currentMusic?.song?.albumId === song.albumId;
    if (isSameAsCurrent) {
      setIsPlaying(true);
      return;
    }

    // Cargar nueva canción
    const playlist = allPlaylists.find(p => p.albumId === song.albumId);
    const playlistSongs = songs.filter(s => s.albumId === song.albumId);

    setCurrentMusic({
      songs: playlistSongs,
      playlist: playlist ?? null,
      song: song
    });
    setIsPlaying(true);
  };

  // Verificar si una canción está sonando
  const isSongPlaying = (song: Song) => {
    return isPlaying && 
           currentMusic?.song?.id === song.id && 
           currentMusic?.song?.albumId === song.albumId;
  };

  const showEmptyState = searchQuery.trim().length < 2;
  const showNoResults = searchQuery.trim().length >= 2 && filteredSongs.length === 0;

  return (
    <div className="flex flex-col h-full bg-neutral-900 text-white p-6 ">
      {/* Barra de búsqueda */}
      <div className="mb-8 flex justify-center mr-80 mt-8">
        <input
          type="text"
          placeholder="¿Qué querés reproducir?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md bg-neutral-800 text-white rounded-full py-3 px-4
                   focus:outline-none focus:ring-2 focus:ring-white focus:bg-neutral-700
                   placeholder-neutral-400 transition-all duration-200"
        />
      </div>

      {/* Estado inicial */}
      {showEmptyState && (
        <div className="flex flex-col items-center justify-center flex-1 text-center mr-80">
          <h2 className="text-2xl font-bold mb-2">Busca tu música favorita</h2>
          <p className="text-neutral-400">
            {searchQuery.trim().length === 1 
              ? 'Escribe al menos 2 caracteres para buscar' 
              : 'Encuentra canciones por título, artista o álbum'}
          </p>
        </div>
      )}

      {/* Sin resultados */}
      {showNoResults && (
        <div className="flex flex-col items-center justify-center flex-1 text-center mr-80">
          <h2 className="text-xl font-bold mb-2">No se encontraron resultados para "{searchQuery}"</h2>
          <p className="text-neutral-400">Intenta usar otras palabras clave</p>
        </div>
      )}

      {/* Lista de canciones */}
      {filteredSongs.length > 0 && (
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <h2 className="text-2xl font-bold mb-4">Canciones</h2>
          <div className="space-y-1">
            {filteredSongs.map((song, index) => {
              const isPlaying = isSongPlaying(song);
              
              return (
                <div
                  key={`${song.id}-${song.albumId}`}
                  className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 p-2 rounded-md hover:bg-neutral-800 group cursor-pointer items-center"
                  onClick={() => handlePlaySong(song)}
                >
                  {/* Número / Play Button */}
                  <div className="flex items-center justify-center w-10">
                    {isPlaying ? (
                      <button className="text-green-500">
                        <Pause className="w-4 h-4" />
                      </button>
                    ) : (
                      <>
                        <span className="group-hover:hidden text-neutral-400">{index + 1}</span>
                        <button className="hidden group-hover:flex text-white">
                          <Play className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Imagen y título */}
                  <div className="flex items-center gap-3">
                    <img 
                      src={song.image} 
                      alt={song.title}
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <p className={`font-medium ${isPlaying ? 'text-green-500' : 'text-white'}`}>
                        {song.title}
                      </p>
                      <p className="text-sm text-neutral-400">{song.artists.join(', ')}</p>
                    </div>
                  </div>

                  {/* Álbum */}
                  <div className="text-sm text-neutral-400">
                    {song.album}
                  </div>

                  {/* Duración */}
                  <div className="text-sm text-neutral-400">
                    {song.duration}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}