import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    if (!data) {
        return <div> LOADING !</div>;
    }

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async ({ params }) => {
    const { id } = params;
    const response = await fetch(
        `https://api.github.com/users/${id || ROKUMATE}`
    );
    return response.json();
    // console.log(id);
    // const response = await fetch(`https://api.github.com/users/${id}`);
    // const response = await fetch(`https://api.github.com/users/ROKUMATE`);
    // return response.json();
};
