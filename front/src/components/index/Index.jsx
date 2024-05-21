import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import { CChart } from '@coreui/react-chartjs';
import Menu from "../menu/Menu";
import "./style.css";

export default function Index() 
{
    const [table, setTable] = useState({
        body: []
    });
    const [pie, setPie] = useState({
        labels: [],
        numbers: [],
        indexes: [],
        count: 1
    });
    const [loading, setLoading] = useState(false);    

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + 'get/collection/list/');
        const answer = await response.json();
        
        let labels = [];
        let numbers = [];
        let indexes = [];

        answer.forEach(item => {
            labels.push(item.TITLE.split('.')[1]);
            numbers.push(item.DOCUMENTS);
            indexes.push(item.INDEXES);
        });

        setPie({
            labels: labels,
            numbers: numbers,
            indexes: indexes,
            count: labels.length
        })

        setTable({
            body: answer
        })

        setLoading(false);
    }, []);

    useEffect(
        () => {
            fetchTable()
        }, [fetchTable]
    );

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getColors(count) {
        if(count > 0) {
            let arColors = [];
            let arColorCode = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9' ,'0'];
            //HEX: RGB, RGBA. 00 00 00 00

            for(let j = 0; j < count; j++) {
                let color = '#';
                for(let i =0; i < 6; i++) {
                    color += arColorCode[getRandomInt(16)]
                }

                arColors.push(color);
            }

        }
        else return false;
    }


    return (
        <>
        <body className="text">
            <h1 >
                Это небольшой сайт для сохранения информации о просмотренных фильмах и сериалах. Здесь вы можете оставить свою личную оценку на любое произведение, а потом советовать друзьям, основываясь на оставленных заметках.
            </h1>
        </body>    
        
        <Menu></Menu>    {/* <table className="simple-table">
            <thead>
                <tr>
                    <th>фильм</th>
                    <th>дата</th>
                    <th>жанр</th>
                    <th>жанр</th>
                </tr>
            </thead>
            <tbody>
                {
                    // !loading && 
                    table.body.map(row => (
                        <tr key={row._id} id={row._id}>
                            {
                            Object.values(row).map((col, index) => (
                               <td key={index}>{col}</td>
                            ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table> */}

        
        
        </>
    )
}