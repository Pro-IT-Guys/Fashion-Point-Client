import { Avatar, Box, Button, Card, Divider, Typography } from '@mui/material'
import MenuPopover from '../MenuPopover'
import { styled } from '@mui/material/styles'
import MessageItem from './MessageItem'

const InfoStyle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(0.75),
  color: theme.palette.text.secondary,
}))

const MessageImgStyle = styled('img')(({ theme }) => ({
  width: '100%',
  cursor: 'pointer',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up('md')]: {
    height: 200,
    minWidth: 296,
  },
}))

export default function ChatPopup({ openChat, setOpenChat, anchorRef }) {
  const demoMessage = {
    senderId: '8864c717-587d-472a-929a-8e5f298024da-0',
    contentType: 'text',
    content: 'Hello',
    createdAt: '2021-09-30T07:50:00.000Z',
    conversationId: '8864c717-587d-472a-929a-8e5f298024da',
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
  }

  const demoConversation = {
    id: '8864c717-587d-472a-929a-8e5f298024da',
    participants: [
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        name: 'Admin',
        avatar: '/static/mock-images/avatars/avatar_default.jpg',
      },
      {
        id: '8864c717-587d-472a-929a-8e5f298024da-1',
        name: 'User',
        avatar: '/static/mock-images/avatars/avatar_1.jpg',
      },
    ],
    createdAt: '2021-09-30T07:50:00.000Z',
    messages: [demoMessage],
  }

  return (
    <MenuPopover
      open={openChat}
      onClose={() => setOpenChat(false)}
      anchorEl={anchorRef}
      sx={{
        width: {
          xs: 280,
          sm: 320,
          md: 500,
        },
        transformOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        marginTop: '-65px',
        marginLeft: '-10px',
      }}
    >
      <Box sx={{ my: 1.5, px: 2.5 }}>
        <Typography variant="subtitle1" noWrap>
          displayName
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          email
        </Typography>
      </Box>

      <Divider />

      <MessageItem message={demoMessage} conversation={demoConversation} />

      <Divider sx={{ my: 1 }} />

      <Box sx={{ p: 2, pt: 1.5 }}>
        <Button fullWidth color="inherit" variant="outlined">
          Leave Chat
        </Button>
      </Box>
    </MenuPopover>
  )
}
