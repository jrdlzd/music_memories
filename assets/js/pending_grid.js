// this file is for sorting the pending projects from pending_project.js
// and to display the grid on pending.html

function displayProjects(projects) {
    const gridContainer = document.getElementById('grid-pending');
    gridContainer.innerHTML = ''; // clear existing content

    projects.forEach(project => {
        const projectBox = document.createElement('a')
        projectBox.className = 'pending-box';
        if(project.link)    projectBox.href = project.spotify_link;
        projectBox.target = '_blank';
        projectBox.innerHTML = `
            <h2>${project.title}</h2>
            <p>Type: ${project.type}</p>
            <p>Artist: ${project.artist}</p>
            <p>Release Date: ${project.release_date}</p>
        `;
        gridContainer.appendChild(projectBox);
    });
}

displayProjects(pending_projects);