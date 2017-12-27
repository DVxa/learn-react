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
    switch (action.type) {
        case "TOGGLE_ACTIVE":
            let newState = [...state];
            newState[action.value].active = !newState[action.value].active;
            return newState;
        case "FILTER":
            return state.filter((record) => {
                return record.firstName.toUpperCase().includes(action.payload.toUpperCase());
            });
        default:
            return state
    }
};
