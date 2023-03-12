import React from "react";
import { FlatList } from "react-native";
import {Card} from '../../molecules'
import { Text}from '../../atoms'

const FAKE_DATA =[
    {
        id: 0,
        image_url: 'https://www.persistent.com/wp-content/uploads/2016/02/blog-banner-Is-your-Node.js-application-production-ready-scaled.jpg',
    },
    {
        id: 1,
        image_url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--4I6BM-mT--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/lubr9bb4d2obyx9lb3px.png'
    },
    {
        id: 2,
        image_url: 'http://www.sketchappsources.com/resources/source-image/python-logo.png'
    },
    {
        id:3,
        image_url: 'https://images.freeimages.com/fic/images/icons/977/rrze/720/database_mysql.png'
    }
]

export const HomeList = ()=>{
    return(
        <FlatList
        horizontal
        data={FAKE_DATA}
        renderItem={({ item}) => <Card item ={item}/>}
        keyExtractor={(item) =>String(item.id)}
        />
    )
}