import { useState } from 'react';


const ZombieFighterList = ({ zombieFighter }) => {

    const [team, setTeam] = useState([]);
    const [money, setMoney] = useState(100)
    const [zombieFighters, setZombieFighters] = useState({})

    const handleAddFighter = () => {
        console.log('Added zombie fighter');
        console.log({zombieFighter});
        setZombieFighters(...team, {zombieFighter});
        console.log({team});
    };

    // const addFighter = (newFighter) => {
    //     setTeam([...team, newFighter]);
    //     console.log(team)
    // };

    return (
        <ul>
            <li>
                <ul><img src={zombieFighter.img}></img></ul>
                <ul>{zombieFighter.name}</ul>
                <ul>Price:{zombieFighter.price}</ul>
                <ul>Strength: {zombieFighter.strength}</ul>
                <ul>Agility: {zombieFighter.agility}</ul>
                <div>
                    <button onClick={handleAddFighter}>Add</button>
                </div>
            </li>
        </ul>
    );
};

export default ZombieFighterList;