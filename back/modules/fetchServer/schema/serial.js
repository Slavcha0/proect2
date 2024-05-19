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
        type: "List",
        require: true,
        default: "None",
        loc: "Год",
        sort: true,
        list: [2024,2023,2022,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950],
        editable: false,
    },
    GENRE: {
        type: "List",
        require: true,
        default: "None",
        loc: "Жанр",
        sort: true,
        list: ["Комедия","Драма","Боевик","Триллер","Фантастика","Детектив","Ужасы","Трагедия","Катастрофа"],
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
