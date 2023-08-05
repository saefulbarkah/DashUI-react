import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  alpha,
} from '@mui/material';
import React from 'react';

const rows = [
  {
    name: 'File Management App',
    hours: '34',
    priority: 'medium',
    member: ['Remy Sharp', 'Remy Sharp', 'Remy Sharp', 'Remy Sharp'],
    progress: 15,
  },
];

export default function ActiveProject() {
  return (
    <>
      <Box>
        <Card>
          <CardContent sx={{ padding: 0 }}>
            <Box sx={{ padding: '16px' }}>
              <Typography fontWeight={500} fontSize={'16px'}>
                Active Projects
              </Typography>
            </Box>
            <TableContainer
              component={Paper}
              sx={{ borderRadius: 0 }}
              elevation={0}
            >
              <Table
                sx={{
                  minWidth: 650,
                  borderBottom: '1px solid rgba(1,1,1,0.1)',
                }}
                aria-label="simple table"
              >
                <TableHead
                  sx={{
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
                    borderRadius: 0,
                  }}
                >
                  <TableRow>
                    <TableCell>Project Name</TableCell>
                    <TableCell align="right">Hours</TableCell>
                    <TableCell align="right">Priority</TableCell>
                    <TableCell align="center">Members</TableCell>
                    <TableCell align="left">Progress</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="right">{row.hours}</TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          variant="contained"
                          disableElevation
                          disableRipple
                          sx={{ borderRadius: '2px', padding: 0 }}
                        >
                          {row.priority}
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <AvatarGroup
                          max={3}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          spacing={20}
                        >
                          {row.member.map((item, index) => (
                            <Avatar alt="Remy Sharp" key={index} />
                          ))}
                        </AvatarGroup>
                      </TableCell>
                      <TableCell align="left">
                        <Stack direction={'row'} alignItems={'center'} gap={2}>
                          <Typography fontSize={'14px'}>
                            %{row.progress}
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={row.progress}
                            sx={{
                              width: '100%',
                            }}
                          />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button size="small">View All Projects</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
