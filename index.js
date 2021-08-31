const listOfMovies = {
  account: 'Jessy',
  genres: [
    'Thriller',
    'Drama',
    'Anime',
    'Comedy',
    'Romance',
    'Horror',
    'Documentaries',
    'Action'
  ],
  favourites: [
    {
      title: 'Little Miss Sunshine',
      genre: 'Comedy',
      year: 2006
    },
    {
      title: "Howl's Moving Castle",
      genre: 'Anime',
      year: 2004
    },
    {
      title: 'Aquaman',
      genre: 'Action',
      year: 2019
    },
    {
      title: 'The Shape of Water',
      genre: 'Drama',
      year: 2017
    },
    {
      title: 'Your name',
      genre: 'Anime',
      year: 2017
    },
    {
      title: 'Inception',
      genre: 'Action',
      year: 2010
    }
  ]
};

let fave = [];

for (let i = 0; i < listOfMovies.favourites.length; i++) {
  if (fave.indexOf(listOfMovies.favourites[i].genre) === -1) {
    fave.push(listOfMovies.favourites[i].genre);
  }
}

let genres = listOfMovies.genres;

let notFave = [];
for (let i = 0; i < genres.length; i++) {
  if (!fave.includes(genres[i])) {
    notFave.push(genres[i]);
  }
}
console.log(notFave);

// let notFave = [];
// for (let j = 0; j < genres.length; j++) {
//   if (fave.indexOf(genres[j]) === -1) {
//     notFave.push(genres[j]);
//   }
// }

// console.log(notFave);
