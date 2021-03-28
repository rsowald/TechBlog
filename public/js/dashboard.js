const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to post');
        }
    }
};

//need to move to a post.js
const updateFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (event.target.hasAttribute('update-id')) {
        const id = event.target.getAttribute('update-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
};

//need to move to a post.js
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('del-id')) {
        const id = event.target.getAttribute('del-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostFormHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', updateButtonHandler);
