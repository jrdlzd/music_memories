// project.js
// Get the project ID from the URL parameters

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Fetch the project from the data
    const project = projects.find(p => p.id === parseInt(projectId));

    if (project) {
        document.getElementById('doc_title').innerText = `Music Memories - ${project.title}`;
        document.getElementById('title').innerText = project.title;
        document.getElementById('artist').innerText = `${project.type} by ${project.artist}`;
        document.getElementById('inner_title').innerText = `"${project.title}" - ${project.artist}`;
        //document.getElementById('inner_artist').innerText = `Artist: ${project.artist}`;
        document.getElementById('type').innerHTML = `<strong>Type:</strong> ${project.type}`;
        document.getElementById('genre').innerHTML = `<strong>Genre:</strong> ${project.genre}`;
        document.getElementById('release_date').innerHTML = `<strong>Released</strong> ${project.release_date}`;
        document.getElementById('rating').innerHTML = `<strong>Rating:</strong> ${project.rating}/10`;
        //document.getElementById('project-image').src = project.image;
        //document.getElementById('spotify_link').href = project.spotify_link;
        if(project.thoughts)    document.getElementById('thoughts').innerText = project.thoughts;
        document.getElementById('favorites').innerHTML = `<strong>Favorites:</strong> ${project.favorites}`
        document.getElementById('project-spotify-embed').innerHTML = project.spotify_embed;
    }
});