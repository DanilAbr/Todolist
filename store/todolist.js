export const state = () => ({
    todos: [
        {
            id: 1,
            title: 'Сделать что-то',
            done: false,
        },
        {
            id: 2,
            title: 'Купить что-то',
            done: true,
        },
        {
            id: 3,
            title: 'Позвонить кому-то',
            done: false,
        },
    ],
});

export const mutations = {
    toggle(state, todo) {
        todo.done = !todo.done;
    },
    delete(state, todo) {
        state.todos.splice(todo, 1);
    },
};

export const actions = {
};

export const getters = {

}

