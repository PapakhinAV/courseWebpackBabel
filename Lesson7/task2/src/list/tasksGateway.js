const baseUrl = 'https://5f8dbac64c15c40016a1e240.mockapi.io/tasks';

// const mapTasks = (tasks) => tasks.map(({ id, ...rest }) => ({ ...rest, id: _id }));

export const getTasksList = () => fetch(baseUrl)
    .then((response) => response.json());

export const createTask = (taskData) => fetch(baseUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
});
