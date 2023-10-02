import {Drawer} from '@mui/material';
import SidebarContents from '../sidebarContents/SidebarContents.component';

// eslint-disable-next-line react/prop-types
const Sidebar = ({openDrawer}) =>{
    return (
        <Drawer
            variant ="persistent"
            open={openDrawer}
            anchor='left'
            hideBackdrop={true}
            ModalProps={{
                keepMounted : true
            }}
            sx={{
                '& .MuiDrawer-paper':{
                    marginTop : '64px',
                    width: 250,
                    background : '#E3E3E3',
                    borderRight: 'none',
                    height : 'calc(100vh-64px)'
                }
            }}
        >
            <SidebarContents />
        </Drawer>
    )
}

export default Sidebar;