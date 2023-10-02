import Dialog from '@mui/material/Dialog';
import {Box, styled,Typography, InputBase, TextField,Button} from '@mui/material';
import {Delete,Close} from '@mui/icons-material';
import { useState } from 'react';


const dialogStyle = {
    height : '85%',
    width : '80%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow: 'none',
    borderRadius : '10px 10px 0 0'
}

const Header =  styled(Box)({
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : '8px 15px',
    background : '#C1C2C2',
    '& > svg' : {
        cursor : 'pointer'
    }

});

const InputWrapper = styled(Box)({
    display : 'flex',
    flexDirection : 'column',
    padding : '0 15px',
    '& > div' : {
        borderBottom : 'solid 1px #C4C4C4'
    },
    '& > div > input' : {
        color : '#000'
    }

})

const Footer = styled(Box)({
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : '0 15px',
    '& > Button':{
        borderRadius : 20,
        width : 100,
        outline : 'none'
    }
})

// eslint-disable-next-line react/prop-types
const ComposeMail = ({openMailbox, setOpenMailbox})=>{

    const [data , setData] = useState({});

    const config = {
        Host : "smtp.elasticemail.com",
        Username : "locoqoqe@socam.me",
        Password : "A0F2CF52CC314BCB769AE40E379CC067547D",
        Port : 2525
    }

    const closeMail=(e)=>{
        e.preventDefault();
        setOpenMailbox(false);
    }

    const sendMail = (e)=>{
        e.preventDefault();
        console.log(data);

        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : 'suriyansh.overhaul@gmail.com',
                Subject : data.subject,
                Body : data.body
            }).then(
              message => alert(message)
            );
        }
        closeMail(e);
    }

    const onValueChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    return (
        <Dialog open={openMailbox} PaperProps={{sx:dialogStyle}}>
            <Header>
                <Typography fontWeight='fontWeightBold' variant='body1' sx={{fontSize : 14}}>New Message</Typography>
                <Close fontSize='small' onClick ={(e)=>closeMail(e)} />
            </Header>
            <InputWrapper>
                <InputBase placeholder='Recipients' name='to' onChange={(e)=>onValueChange(e)}   />
                <InputBase placeholder='Subject' name='subject' onChange={(e)=>onValueChange(e)}  />
            </InputWrapper>
            <TextField multiline  rows={15} sx={{'.MuiOutlinedInput-notchedOutline ': {border: 'none'}}} name='body' onChange={(e)=>onValueChange(e)}/>   
            <Footer>
                <Button variant='contained' onClick={(e)=>sendMail(e)} >Send</Button>
                <Delete sx={{cursor : 'pointer'}} onClick ={(e)=>closeMail(e)}/>
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;