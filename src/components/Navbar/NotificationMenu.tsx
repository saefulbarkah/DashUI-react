import React from 'react';
import {
  Notification,
  NotificationButon,
  NotificationContent,
} from '../Notification';
import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';
import { FiGitBranch } from 'react-icons/fi';

const dummy = [
  {
    avatar: 'lorem.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga veniam sapiente voluptatem iusto qui ',
    status: 'success',
  },
  {
    avatar: 'lorem.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga veniam sapiente voluptatem iusto qui ',
    status: 'success',
  },
  {
    avatar: 'lorem.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga veniam sapiente voluptatem iusto qui ',
    status: 'success',
  },
  {
    avatar: 'lorem.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fuga veniam sapiente voluptatem iusto qui ',
    status: 'success',
  },
];

export default function NotificationMenu() {
  return (
    <Notification>
      <NotificationButon counter={5} color="error" />
      <NotificationContent>
        <Stack>
          {dummy.map((item, i) => (
            <Box key={i}>
              <Stack direction={'row'} alignItems={'center'}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title={item.title}
                  subheader="September 14, 2016"
                  sx={{
                    '& .MuiTypography-root': {
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 1,
                    },
                  }}
                />
                <Typography fontSize={'13px'} color={'green'}>
                  Success
                </Typography>
              </Stack>
            </Box>
          ))}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              position: 'sticky',
              bottom: '10px',
              bgcolor: 'white',
              p: '10px',
            }}
          >
            <Button size="small">View all notification</Button>
          </Box>
        </Stack>
      </NotificationContent>
    </Notification>
  );
}
