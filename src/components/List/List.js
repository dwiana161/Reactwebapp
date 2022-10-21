import React from 'react'
import { useState } from 'react';
import { Header, Image, List } from 'semantic-ui-react'

const UserList = ({userData, loading}) => {

    const [searchUser, setSearchUser] = useState('');

    return (
        <List divided relaxed>
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
                        <List.Item>
                        <Image avatar src={item.avatar} />
                        <List.Content>
                            <List.Header as='a'>{item.first_name} {item.last_name}</List.Header>
                        </List.Content>
                        </List.Item>
                    </>
                    )
                })
            }
  </List>
    )
}

export default UserList;