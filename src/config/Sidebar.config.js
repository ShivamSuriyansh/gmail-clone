import {Photo, StarBorderOutlined,Send,InsertDriveFileOutlined,DeleteOutline, MailOutline} from '@mui/icons-material';

export const SIDEBAR_DATA = [
    {
        name : 'inbox',
        title : 'Inbox',
        icon : Photo
    },
    {
        name : 'starred',
        title : 'Starred',
        icon : StarBorderOutlined
    },
    {
        name : 'send',
        title : 'Send',
        icon : Send
    },
    {
        name : 'drafts',
        title : 'Drafts',
        icon : InsertDriveFileOutlined
    },
    {
        name : 'bin',
        title : 'Bin',
        icon : DeleteOutline
    },
    {
        name : 'allMail',
        title : 'All Mail',
        icon : MailOutline
    }
]