import React from 'react'
import {List, ListItem, Divider} from '@material-ui/core'

const SearchView = (props) =>
{
    const test = [1,2,3]
    //use props.routes
    const list = test.map((elem, index) =>
        <div>
        <ListItem>
            {index}
        </ListItem>
        <Divider/>
        </div>
    )

    return (
        <List>
            {list}
        </List>
    )
}

export default SearchView;