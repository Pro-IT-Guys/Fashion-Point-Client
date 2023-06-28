import { Box, Button, Card, Divider, Typography } from '@mui/material'
import MenuPopover from '../MenuPopover'

export default function ChatPopup({ openChat, setOpenChat, anchorRef }) {
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

        <Box>
              {/* Chat box */}
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ p: 2, pt: 1.5 }}>
        <Button fullWidth color="inherit" variant="outlined">
          Leave Chat
        </Button>
      </Box>
    </MenuPopover>
  )
}
