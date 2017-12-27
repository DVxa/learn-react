export const setFilterDetails = (value) => ({
    type: "FILTER_DETAILS",
    payload: value
});

export const clearFilterDetails = () => ({
    type: "CLEAR_FILTER_DETAILS",
    payload: null
});

export const setFilter = (value) => ({
    type: "FILTER",
    payload: value
});

const users =
    [
        {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            about: "Nice guy",
            hobby: "Likes drinking wine && beer",
            skills: ["html", "javascript", "redux"],
            active: true
        },
        {
            id: "2",
            firstName: "Mary",
            lastName: "Moe",
            about: "Cute girl",
            hobby: "Likes playing xbox whole days long",
            skills: ["Fortran", "Lua", "R#"],
            active: true
        }
    ]
;

export default function usersReducer(state = users, action) {
    console.log(action, state);
    switch (action.type) {
        case "TOGGLE_ACTIVE":
            let newState = [...state];
            newState[action.payload].active = !newState[action.payload].active;
            return newState;
        case "FILTER":
            return action.payload ? state.filter(it => it.firstName.toUpperCase().includes(action.payload.toUpperCase())) : users;
        case "FILTER_DETAILS":
            return action.payload ? state.filter(it => it.id === action.payload) : state;
        case "CLEAR_FILTER_DETAILS":
            return users;
        default:
            return state
    }
};
