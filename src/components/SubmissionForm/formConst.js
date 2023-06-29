export const formInputs = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Streamer username",
        errorMessage: "Streamer username should be 2-20 characters and shouldn't include any special character except: ., _ and space!",
        pattern: "^[A-Za-z0-9._ ]{2,20}$",
        required: true
    },
    {
        id: 2,
        name: "description",
        type: "textarea",
        placeholder: "Description",
        errorMessage: "Description should be maximum 150 characters!",
        pattern: "^.{1,150}$"
    }
];
export const formDropdownOptions = [
    {
        id: 1,
        name: "Twitch",
    },
    {
        id: 2,
        name: "Youtube",
    },
    {
        id: 3,
        name: "Kick",
    },
    {
        id: 4,
        name: "Rumble",
    },
    {
        id: 5,
        name: "TikTok",
    }
];