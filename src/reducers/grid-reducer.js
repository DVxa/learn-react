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

export const toggleActive = (value) => ({
    type: "TOGGLE_ACTIVE",
    payload: value
});

export const changeLastName = (value) => ({
    type: "CHANGE_LAST_NAME",
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
            active: false
        }
    ]
;

export default function usersReducer(state = users, action) {
    console.log(action, state);
    switch (action.type) {
        case "TOGGLE_ACTIVE":
            const newState = [...state];
            newState[action.payload].active = !newState[action.payload].active;
            return newState;
        case "CHANGE_LAST_NAME":
            const newState1 = [...state];
            newState1[action.payload.index].lastName = action.payload.value;
            return newState1;
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
