import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardList from "../card/card";
import { Button, Grid } from "semantic-ui-react";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const dataUsers = async(page) => {
        const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(res.data.data);
        setLoading(false);
        // setNextPage(res)

        console.log(res);
    }

    useEffect(() => {
        dataUsers();
    },[])

    return (
        <>
        <CardList userList={users} loading={loading}/>

        <Grid>
        <Grid.Column textAlign="center">
        <Button 
            content='Previous' 
            icon='left arrow' 
            labelPosition='left' 
            onClick={() => {
                dataUsers(1);
            }}
        />
        <Button 
            content='Next' 
            icon='right arrow' 
            labelPosition='right' 
            onClick={() => {
                dataUsers(2);
            }}
        />
        </Grid.Column>
    </Grid>
    </>
    )
}

export default Home;