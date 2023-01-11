import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Avatar, Card} from 'antd';
const {Meta} =Card;

let title , categories , startDate , endDate;

function calendarApi() {
    axios.get('https://www.orangedigitalcenters.com/api/v1/client/country/TN/event/').then(response => {
        title = response.data.data[0].translations.fr.title ;
        categories =response.data.data[0].categories;
        startDate= response.data.data[0].startDate
        endDate= response.data.data[0].endDate;


    })
    return title,startDate;
    
}

const ListCard = () => {
   
    return (
        <div style={{marginBottom:'1rem',height:'100px'}}>
           <Card  hoverable >
               <Meta avatar={<Avatar shape="square" size={{md:50,lg:50,xl:50,xxl:50}}
               src='/images/chat.png' />}
               title={title} description={startDate} />
            </Card>
        </div>
    );
};
export default ListCard;