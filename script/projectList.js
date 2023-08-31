fetch('/content/project/project-index.txt')
    .then(response => response.text())
    .then(data => {
        // Split the data into an array of project names
        const projects = data.split('\n').filter(name => name.trim() !== '');

        const mainContent = document.querySelector('.main-content');

        projects.forEach(projectName => {
            const projectBox = createProjectBox(projectName);
            mainContent.appendChild(projectBox);
        });
    })
    .catch(error => {
        console.error('Error fetching project list:', error);
    });
	
	


	function createProjectBox(projectName) {

		const main = document.createElement('a');
		main.className = 'project-redirect';
		main.href = '/content/project/' + projectName + 'projectPage.html';

		const projectBox = document.createElement('div');
		projectBox.className = 'project-box';
		

		const imageContainer = document.createElement('div');
		imageContainer.className = 'project-images';

		const imagecont1 = document.createElement('div');
		imagecont1.className = 'project-image';
		const image1 = document.createElement("img");
		image1.src = './content/project/' + projectName + 'preview1.jpg';
		image1.alt = "Project Image 1";
		imagecont1.appendChild(image1);

		const imagecont2 = document.createElement('div');
		imagecont2.className = 'project-image';
		
		const image2 = document.createElement("img");
		image2.src = './content/project/' + projectName + 'preview2.jpg';
		image2.alt = "Project Image 2";
		imagecont2.appendChild(image2);

		const projectNameElement = document.createElement('div');
		projectNameElement.className = 'project-name';

		fetch('./content/project/' + projectName + '/title.txt')
        .then(response => response.text())
        .then(title => {
            projectNameElement.textContent = title;
        });

		imageContainer.appendChild(imagecont1);
		imageContainer.appendChild(imagecont2);

		projectBox.appendChild(imageContainer);
		projectBox.appendChild(projectNameElement);

		main.appendChild(projectBox);
		return main;
}