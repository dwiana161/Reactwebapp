import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Menu, Segment } from "semantic-ui-react";
import UserList from "../List/List";
import "./home.scss";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

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
    <Menu secondary className="navbar">
        <Menu.Menu position="right" className="btn-logout">
            <Menu.Item
                className="item"
                name="logout"
                onClick={() => navigate('/')}
            />
        </Menu.Menu>
    </Menu>
        <div className="home">
        <UserList userData={users} loading={loading}/>

        <Grid>
        <Grid.Column textAlign="center">
            <Segment inverted>
                <Button 
                    inverted
                    basic 
                    color='violet'
                    content='Previous' 
                    icon='left arrow' 
                    labelPosition='left'
                    className="btn-prev" 
                    onClick={() => {
                        dataUsers(1);
                    }}
                />
                <Button
                    inverted 
                    basic 
                    color='violet'
                    content='Next' 
                    icon='right arrow' 
                    labelPosition='right'
                    className="btn-next" 
                    onClick={() => {
                        dataUsers(2);
                    }}
                />
            </Segment>
        </Grid.Column>
    </Grid>
    </div>
    </>
    )
}

export default Home;