import React from 'react'
import { useState } from 'react';
import { Header, Image, List } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

const UserList = ({userData, loading}) => {

    const [searchUser, setSearchUser] = useState('');
    const navigate = useNavigate();

    return (
<>
            {
                loading ? <Header as='h1'>Loading...</Header> :
                userData.filter((item) => {              //filter by searchPoke results
                    if (searchUser === "") {
                        return item
                    } else if (
                        item.name.toLowerCase().includes(searchUser.toLowerCase())){
                            return item
                        }
                }).map((item) => {
                    return(
                    <>
                    <List divided relaxed  onClick={() => (navigate(`/users/${item.id}`))}>
                        <List.Item>
                        <Image avatar src={item.avatar} />
                        <List.Content>
                            <List.Header as='a'>{item.first_name} {item.last_name}</List.Header>
                        </List.Content>
                        </List.Item>
                        </List>
                    </>
                    )
                })
            }
            </>

    )
}

export default UserList;