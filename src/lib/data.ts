import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [

  {
    id: '1',
    albumId: 1,
    title: "Canciones favoritas",
    color: colors.indigo,
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84587ecba4a27774b2f6f07174",
    artists: ["Tu usuario"],
  },
  
  {
    id: '2',
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "https://i.ytimg.com/vi/tgI6PjEq0O8/maxresdefault.jpg",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: '3',
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover:
      "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: '4',
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover:
      "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover:
      "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover:
      "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },

  {
    id: '7',
    albumId: 7,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover:
      "https://noz-spotify-clone-astro.vercel.app/music/artists/nospirit-casiio/albums/chill-lo-fi-music/cover.jpg",
    artists: ["NoSpirit", "Casiio"],
  },

];



export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [


  {
    "id": 1,
    "albumId": 1,
    "title": "Silent Rain",
    "image": `https://i.ytimg.com/vi/tgI6PjEq0O8/maxresdefault.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Lo-Fi Chill Session",
    "duration": "2:38"
  },

  {
    "id": 2,
    "albumId": 1,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:30"
  },

  {
    "id": 3,
    "albumId": 1,
    "title": "Dusk",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Blue Note Study Time",
    "duration": "3:02"
  },

  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:06"
  },

  {
    "id": 5,
    "albumId": 1,
    "title": "Midnight Farewell",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "2:29"
  },




  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://i.ytimg.com/vi/tgI6PjEq0O8/maxresdefault.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Lo-Fi Chill Session",
    "duration": "2:38"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://i.ytimg.com/vi/tgI6PjEq0O8/maxresdefault.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Lo-Fi Chill Session",
    "duration": "2:40"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": " Midnight Tales",
    "image": `https://i.ytimg.com/vi/tgI6PjEq0O8/maxresdefault.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Lo-Fi Chill Session",
    "duration": "2:53"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://i.ytimg.com/vi/tgI6PjEq0O8/maxresdefault.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Lo-Fi Chill Session",
    "duration": "3:11"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://i.ytimg.com/vi/tgI6PjEq0O8/maxresdefault.jpg`,
    "artists": ["Urban Nocturne"],
    "album": "Lo-Fi Chill Session",
    "duration": "2:58"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Lunar",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:06"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:30"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "1:59"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:56"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:30"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Clouds",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["takeo"],
    "album": "Blue Note Study Time",
    "duration": "2:59"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "New Ligth",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Slow Burn"],
    "album": "Blue Note Study Time",
    "duration": "2:12"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Dusk",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Hazy Year"],
    "album": "Blue Note Study Time",
    "duration": "3:02"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "Blue Moon",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["takeo"],
    "album": "Blue Note Study Time",
    "duration": "2:29"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "Crates",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["takeo"],
    "album": "Blue Note Study Time",
    "duration": "2:29"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chau Saura Session",
    "duration": "3:49"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chau Saura Session",
    "duration": "1:52"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chau Saura Session",
    "duration": "2:15"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chau Saura Session",
    "duration": "4:06"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chau Saura Session",
    "duration": "2:54"
  },


  {
    "id": 1,
    "albumId": 6,
    "title": "Starlight Stroll",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "1:56"
  },
  {
    "id": 2,
    "albumId": 6,
    "title": "Morning Brew",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "1:48"
  },
  {
    "id": 3,
    "albumId": 6,
    "title": "City Lights Melody",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "2:35"
  },
  {
    "id": 4,
    "albumId": 6,
    "title": "Metropolitan Whispers",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "2:48"
  },
  {
    "id": 5,
    "albumId": 6,
    "title": "Midnight Farewell",
    "image": "https://f4.bcbits.com/img/a0363730459_16.jpg",
    "artists": ["WFS", "Nadav Cohen"],
    "album": "Like a Necessity",
    "duration": "2:29"
  },


  {
    "id": 1,
    "albumId": 7,
    "title": "Moonlit Walk",
    "image": `https://noz-spotify-clone-astro.vercel.app/music/artists/nospirit-casiio/albums/chill-lo-fi-music/cover.jpg`,
    "artists": ["Daemon"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:57"
  },
  {
    "id": 2,
    "albumId": 7,
    "title": "Coffee Daze",
    "image": `https://noz-spotify-clone-astro.vercel.app/music/artists/nospirit-casiio/albums/chill-lo-fi-music/cover.jpg`,
    "artists": ["Daemon"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:40"
  },
  {
    "id": 3,
    "albumId": 7,
    "title": "Skyline Serenade",
    "image": `https://noz-spotify-clone-astro.vercel.app/music/artists/nospirit-casiio/albums/chill-lo-fi-music/cover.jpg`,
    "artists": ["Daemon"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:29"
  },
  {
    "id": 4,
    "albumId": 7,
    "title": "Stay",
    "image": `https://noz-spotify-clone-astro.vercel.app/music/artists/nospirit-casiio/albums/chill-lo-fi-music/cover.jpg`,
    "artists": ["Daemon"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:11"
  },
  {
    "id": 5,
    "albumId": 7,
    "title": "Night's End",
    "image": `https://noz-spotify-clone-astro.vercel.app/music/artists/nospirit-casiio/albums/chill-lo-fi-music/cover.jpg`,
    "artists": ["Daemon"],
    "album": "Chill Lo-Fi Music",
    "duration": "2:26"
  },

]