const film = {
    _id: {},
    TITLE: {
        type: "String",
        require: true,
        default: "None",
        loc: "Название",
        sort: true,
        editable: true,
    },
    GENRE: {
        type: "String",
        require: true,
        default: "None",
        loc: "Жанр",
        sort: true,
        editable: true,

    }
    
};

export default film;
