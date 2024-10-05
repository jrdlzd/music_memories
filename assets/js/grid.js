// grid.js for reviewed.html
// used to display the projects from projects.js into reviewed.html

function displayProjects(projects) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; // clear existing content

    projects.forEach(project => {
        const projectBox = document.createElement('a')
        projectBox.className = 'card';
        if(project.link)
            projectBox.href = project.link;
        else
            projectBox.href = `project.html?id=${project.id}`;
        projectBox.innerHTML = `
            <img src="assets/img/album-covers/${project.img}" alt="" class="project-image">
            <div class="project-box">
                <h2>${project.title}</h2>
                <p>${project.type} by ${project.artist}</p>
                <p>Released: ${project.release_date}</p>
                <p>Rating: ${project.rating}/10</p>
            </div>
        `;

        gridContainer.appendChild(projectBox);
    });
}

// Initial display
displayProjects(projects);

let filteredProjects = [...projects];

function filterProjects(year) {
    // Filter the projects by the selected year
    filteredProjects = projects.filter(project => new Date(project.release_date).getFullYear() === year);
    displayProjects(filteredProjects); // Display filtered projects
}

function sortProjects(option) {
    let sortedProjects = [...filteredProjects]; // Use the filtered list

    switch(option) {
        case 'none':
            sortedProjects.sort((a, b) => a.id - b.id);
            break;
        case 'rating_high_to_low':
            sortedProjects.sort((a, b) => b.rating - a.rating);
            break;
        case 'rating_low_to_high':
            sortedProjects.sort((a, b) => a.rating - b.rating);
            break;
        case 'alphabetical':
            sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'release_date_newest':
            sortedProjects.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
            break;
        case 'release_date_oldest':
            sortedProjects.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
            break;
        default:
            break;
    }

    displayProjects(sortedProjects); // Display sorted projects
}


// Event listeners
document.getElementById('filterYear').addEventListener('change', function() {
    if(this.value === 'all') {
        filteredProjects = [...projects];
        displayProjects(filteredProjects);
    }
    else {
        const selectedYear = parseInt(this.value);
        filterProjects(selectedYear);
    }
});

document.getElementById('sortOption').addEventListener('change', function() {
    const selectedOption = this.value;
    sortProjects(selectedOption);
});
