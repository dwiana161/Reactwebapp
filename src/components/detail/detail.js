import axios from "axios";
import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Icon, Item } from "semantic-ui-react";
import "./detail.scss";


const Detail = () => {
    const id = useParams();
    console.log('id', id.id);

    const navigate = useNavigate();

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
        <div className="detail-card">
        <Item.Group>
            <Item>
            <Item.Image size='tiny' src={userDetail?.avatar} />

            <Item.Content>
                <Item.Header as='h4'>{userDetail?.first_name} {userDetail?.last_name}</Item.Header>
                <Item.Meta>{userDetail?.email}</Item.Meta>
            </Item.Content>
            </Item>
        </Item.Group>

        <Button icon labelPosition='left' onClick={() => navigate('/users')}>
          <Icon name='left arrow' />
          Kembali
        </Button>
        </div>
    )
}

export default Detail;