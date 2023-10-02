import { Box,Button, styled, List , ListItem} from '@mui/material';
import {Create} from '@mui/icons-material';
import { SIDEBAR_DATA } from '../../config/Sidebar.config';
import ComposeMail from '../composeMail/ComposeMail.component';

import { useState } from 'react';

const ComposeButton = styled(Button)({
    background : '#8F8F8F',
    color :'Black',
    textTransform : 'none',
    padding : 12,
    minWidth: 130,
    height : 55,
    borderRadius :15,
    '&:hover' : {
        background : '#8F8F8F',
        boxShadow: '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)',
    },
    '&:active' : {
        outline : 'none'
    }
})

const Container = styled(Box)({
    padding : 8,
    '& > ul ' :{
        padding : '10px 0 0 5px',
        fontSize : 14,
        fontWeight: 500,
        cursor : 'pointer'
    },
    '& > ul > li > svg' : {
        marginRight : 20
    }
    
})

const SidebarContents = ()=>{

    const [openMailbox, setOpenMailbox] = useState(false);

    const toggleMailbox = ()=>{
        setOpenMailbox(true);
    }

    return (
        <Container>
            <ComposeButton onClick={toggleMailbox} sx={{ '&:focus': { outline: 'none' } }} >
                <Create sx={{marginRight : '10px'}}/>
                    <Box component='span' sx={{fontWeight : '550' , fontSize : '15px'}}>Compose</Box>
                </ComposeButton>
                <List>
                    {
                        SIDEBAR_DATA.map(data => (
                            <ListItem key={data.name}>
                                <data.icon fontSize='small' />
                                {data.title}
                            </ListItem>
                        ))
                    }
                </List>
                <ComposeMail openMailbox= {openMailbox} setOpenMailbox={setOpenMailbox} />
        </Container>
    )
}

export default SidebarContents;