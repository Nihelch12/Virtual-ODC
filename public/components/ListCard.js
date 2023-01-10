import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Avatar, Card} from 'antd';
const {Meta} =Card;

const ListCard = () => {
    return (
        <div style={{marginBottom:'1rem'}}>
           <Card  hoverable >
               <Meta avatar={<Avatar shape="square" size={{md:100,lg:100,xl:100,xxl:100}}
               src='/images/chat.png' />}
               title='simple card' description='desc' />
            </Card>
        </div>
    );
};
export default ListCard;