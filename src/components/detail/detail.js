import axios from "axios";
import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, Image, Item } from "semantic-ui-react";


const Detail = () => {
    const id = useParams();
    console.log('id', id.id);

    const [userDetail, setUserDetail] = useState();
    const idData = id.id;

    const items = [
        {
          childKey: 0,
          image: '/images/wireframe/image.png',
          header: 'Header',
          description: 'Description',
          meta: 'Metadata',
          extra: 'Extra',
        },
      ]

      const getUserDetail = useCallback(async () => {
        const res = await axios.get(`https://reqres.in/api/users/${idData}`);
        setUserDetail(res.data.data);

        console.log('data', res.data.data);
      },[idData])

      useEffect(() => {
        getUserDetail();
      }, [])

    return (
        
        <Item.Group>
            <Item>
            <Item.Image size='tiny' src={userDetail?.avatar} />

            <Item.Content>
                <Item.Header as='a'>{userDetail?.first_name} {userDetail?.last_name}</Item.Header>
                <Item.Meta>{userDetail?.email}</Item.Meta>
            </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default Detail;