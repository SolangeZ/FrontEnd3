import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

    const [odontologo, setOdontologo] = useState([]);

    const getOdontologo = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        setOdontologo(data);
    };

    useEffect(() => {
        getOdontologo();
    }, []);

    return (
        <main className="">
            <h1>Professional Dentists</h1>
            <div className="card-grid">
                {odontologo.length
                    ? odontologo.map((odontologo) => 
                    <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id} />)
                    : null}
            </div>
        </main>
    )
}

export default Home