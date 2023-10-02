
import {AppBar , Toolbar, styled, Box , InputBase} from '@mui/material';
import {Menu as MenuIcon, Search ,Tune,HelpOutlineOutlined, SettingsOutlined, AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';

const StyledAppBar = styled(AppBar)({
    background : '#f5f5f5',
    boxShadow :'none'

});

const StyledBoxSearch = styled(Box)({
    background: '#E3E3E3',
    marginLeft : 230,
    borderRadius : 10,
    minWidth : 600,
    maxWidth : 700,
    height : 40,
    padding : '0 5px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'space-between',
    '& > div':{
        width : '100%',
        padding : '0 10px'
    }

});


const OptionWrapper =  styled(Box)({
    width : '100%',
    display :'flex',
    justifyContent : 'end',
    '& > svg': {
        padding : 10,
        cursor : 'pointer'
    }
});

// eslint-disable-next-line react/prop-types
const Header = ({toggleDrawer})=> {
    return (
        <div>
            <StyledAppBar>
                <Toolbar>
                    <MenuIcon color='action' onClick={toggleDrawer} sx={{cursor:'pointer'}} />
                    <img width="36" height="36"  style={{marginLeft : 12}} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-gmail-is-a-free-email-service-developed-by-google-logo-bold-tal-revivo.png" alt="external-gmail-is-a-free-email-service-developed-by-google-logo-bold-tal-revivo"/>
                    <span style={{color:'#A5A6A6', fontWeight: '400', fontSize: 32, marginLeft: 14}}>Gmail</span>

                    <StyledBoxSearch>
                        <Search color='action' sx={{cursor:'pointer'}}/>
                        <InputBase placeholder='Search In Mail' sx={{
                            '& input::placeholder': {
                                color: '#000000',
                            },
                        }}
                        />
                        <Tune color='action' sx={{cursor:'pointer'}}/>
                    </StyledBoxSearch>

                    <OptionWrapper>
                        <HelpOutlineOutlined color='action' />
                        <SettingsOutlined color='action' />
                        <AppsOutlined color='action'/>
                        <AccountCircleOutlined color='action'/>
                    </OptionWrapper>

                </Toolbar>
            </StyledAppBar>
        </div>
    )
}

export default Header;