import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

export default function Directory() {
    const [sections, setSections] = useState([])

    const loadIssues = async () => {
        const url = "http://localhost:8000/api/stuff";
        const response = await axios.get(url);
        console.log("setIssues", response.data);
        setSections(response.data);

    }

    useEffect(() => {
        loadIssues();

    }, []);

    /*this.state = {
        sections: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                size: 'large',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                size: 'large',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                size: 'large',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
            }
        ]
    };*/

//            {this.items.map(({title, imageUrl, id, size}) => (
    return (
        <div className='directory-menu'>
            {sections.map((sections) =>
                <MenuItem key={sections.id} title={sections.title} imageUrl={sections.imageUrl} size={sections.size}/>)}

        </div>
)
}