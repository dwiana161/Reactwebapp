import React from 'react'
import { useState } from 'react';
import { Header, Image, List } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import "./List.scss";

const UserList = ({userData, loading}) => {

    const [searchUser, setSearchUser] = useState('');
    const navigate = useNavigate();

    return (
<>
            {
                loading ? <Header as='h1'>Loading...</Header> :
                userData.map((item) => {
                    return(
                    <div className='list-user'>
                    <List divided relaxed  onClick={() => (navigate(`/users/${item.id}`))}>
                        <List.Item>
                        <Image avatar src={item.avatar} />
                        <List.Content>
                            <List.Header as='h4' className='name'>{item.first_name} {item.last_name}</List.Header>
                            <List.Description>
                                    {item.email}
                            </List.Description>
                        </List.Content>
                        </List.Item>
                        </List>
                    </div>
                    )
                })
            }
            </>

    )
}

export default UserList;