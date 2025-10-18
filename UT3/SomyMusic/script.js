const albumsContainer = document.getElementById('albums-container');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

// Elementos del modal
const songName = document.getElementById('song-name');
const songArtist = document.getElementById('song-artist');
const songDuration = document.getElementById('song-duration');
const songGenre = document.getElementById('song-genre');

// 1. Traer los álbumes y canciones desde la API
Promise.all([
  fetch('http://localhost:3000/albums').then(res => res.json()),
  fetch('http://localhost:3000/songs').then(res => res.json())
])
.then(([albums, songs]) => {
  albums.forEach(album => {
    
    const albumSongs = songs.filter(song => song.albumId == album.id);
    const albumDiv = document.createElement('div');

    albumDiv.innerHTML = `
      <h2>${album.name}</h2>
      <p><strong>Artista:</strong> ${album.artist}</p>
      <p><strong>Cantidad de canciones:</strong> ${album.trackCount}</p>
      <p><strong>Géneros:</strong> ${(album.genreList ? album.genreList.join(', ') : 'Sin géneros')}</p>
      <p><strong>Año de lanzamiento:</strong> ${album.year}</p>
    `;

    // Lista de canciones
    const ul = document.createElement('ul');
    albumSongs.forEach(song => {
      const li = document.createElement('li');
      li.textContent = song.name;
      li.style.cursor = "pointer";

      
      li.addEventListener('click', () => {
        songName.textContent = song.name;
        songArtist.textContent = song.artist;
        songDuration.textContent = song.durationSec + " seg";
        songGenre.textContent = song.genre;
        modal.style.display = "block";
      });

      ul.appendChild(li);
    });

    albumDiv.appendChild(ul);
    albumsContainer.appendChild(albumDiv);
  });
})
.catch(error => console.error("Error cargando datos:", error));

// Cerrar modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

