const serial = {
    _id: {},
    TITLE: {
        type: "String",
        require: true,
        default: "None",
        loc: "Название",
        sort: true,
        editable: true,
        
    },
    YEAR: {
        type: "String",
        require: true,
        default: "None",
        loc: "Год",
        sort: true,
        editable: false,
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
        loc: "Оценка",
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

export default serial;
