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
    AGE: {
        type: "String",
        require: true,
        default: "None",
        loc: "Год",
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

    },
    RATING: {
        type: "String",
        require: true,
        default: "None",
        loc: "Оценка критиков",
        sort: true,
        editable: true,

    },
    OPINION: {
        type: "String",
        require: true,
        default: "None",
        loc: "Личный комментарий",
        sort: true,
        editable: true,

    }
    
    
};

export default film;
