import React from "react";
import { useState } from "react";
import { Modal, Button, Header, Image, Grid, Card } from "semantic-ui-react";
import { Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CardList = ({userList, loading}) => {

    console.log('user', userList);

    const [searchUser, setSearchUser] = useState('');

    return (
        <Grid centered columns={3} style={{marginLeft:'10%'}}>
        <Grid.Row>
            {
                loading ? <Header as='h1'>Loading...</Header> :
                userList.filter((item) => {              //filter by searchPoke results
                    if (searchUser === "") {
                        return item
                    } else if (
                        item.name.toLowerCase().includes(searchUser.toLowerCase())){
                            return item
                        }
                }).map((item) => {
                    return (
                        
                        <Grid.Column key={item.id}>
                            <Card style={{width:'50%', marginBottom:'20px', cursor:'pointer'}}>
                            <Image 
                                src={item.avatar} 
                                size={'small'} 
                                centered  
                                style={{cursor:'pointer'}}/>
                            <Card.Content className="ui center aligned" style={{backgroundColor:' #ada397'}}>
                                <Card.Header>{item.first_name} {item.last_name}</Card.Header>
                                <Card.Description>
                                    Email: {item.email}
                                </Card.Description>
                            </Card.Content>
                            </Card>    
                        </Grid.Column>
                    )
                })
            }
               </Grid.Row>
            </Grid>
    )
}

export default CardList;