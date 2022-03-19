class Album {
  constructor({ artist, album, image, url }) {
    this.artist = artist;
    this.album = album;
    this.url = url;
    this.image = image;
  }
}

const MUSIC = [
  new Album({
    artist: "Kindness",
    album: "Something Like A War",
    url: "https://kindness.bandcamp.com/album/something-like-a-war",
    image: "/images/album-kindness.webp",
  }),
  new Album({
    artist: "Los Bitchos",
    album: "Let The Festivities Begin!",
    url: "https://losbitchos.bandcamp.com/album/let-the-festivities-begin",
    image: "/images/album-los-bitchos.webp",
  }),
  new Album({
    artist: "Dry Cleaning",
    album: "New Long Leg",
    url: "https://drycleaning.bandcamp.com/album/new-long-leg",
    image: "/images/album-dry-cleaning.webp",
  }),
  new Album({
    artist: "Park Hye Jin",
    album: "Before I Die",
    url: "https://parkhyejin.bandcamp.com/album/before-i-die",
    image: "/images/album-park-hye-jin.webp",
  }),
  new Album({
    artist: "Nala Sinephro",
    album: "Space 1.8",
    url: "https://nalasinephro.bandcamp.com/album/space-18",
    image: "/images/album-nala-sinephro.webp",
  }),
  new Album({
    artist: "Peeling",
    album: "Worshipper",
    url: "https://peeling.bandcamp.com/album/worshipper",
    image: "/images/album-peeling.webp",
  }),
  new Album({
    artist: "IDLES",
    album: "Joy as an Act of Resistance",
    url: "https://idlesband.bandcamp.com/album/joy-as-an-act-of-resistance",
    image: "/images/album-idles.webp",
  }),
  new Album({
    artist: "Mystic Braves",
    album: "Mystic Braves",
    url: "https://mysticbraves.bandcamp.com/album/mystic-braves-digital-lp",
    image: "/images/album-mystic-braves.webp",
  }),
  new Album({
    artist: "Mia Joy",
    album: "Spirit Tamer",
    url: "https://miajoy.bandcamp.com/album/spirit-tamer",
    image: "/images/album-mia-joy.webp",
  }),
  new Album({
    artist: "Mandy Indiana",
    album: "... EP",
    url: "https://mandyindiana.bandcamp.com/album/ep",
    image: "/images/album-mandy-indiana.webp",
  }),
  new Album({
    artist: "Los Tones",
    album: "Psychotropic",
    url: "https://los-tones.bandcamp.com/album/psychotropic",
    image: "/images/album-los-tones.webp",
  }),
];

export default MUSIC;
