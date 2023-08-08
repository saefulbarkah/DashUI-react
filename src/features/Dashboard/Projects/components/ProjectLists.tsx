import { Widget } from '@/components/Widget/Widget';
import { Grid } from '@mui/material';
import React from 'react';
import { FiBriefcase, FiList, FiUsers } from 'react-icons/fi';
import { ProjectWidget } from './ProjectWidget';

export default function ProjectLists() {
  return (
    <Grid container columnGap={'25px'}>
      <Grid item xs>
        <ProjectWidget
          name="Project"
          icon={<FiBriefcase />}
          colorSchema="primary"
          count={20}
          completed={5}
        />
      </Grid>
      <Grid item xs>
        <ProjectWidget
          name="Active Task"
          icon={<FiList />}
          colorSchema="info"
          count={20}
          completed={5}
        />
      </Grid>
      <Grid item xs>
        <ProjectWidget
          name="Teams"
          icon={<FiUsers />}
          colorSchema="danger"
          count={12}
          completed={5}
        />
      </Grid>
      <Grid item xs>
        <ProjectWidget
          name="productiviy"
          icon={<FiUsers />}
          colorSchema="success"
          count={'76%'}
          completed={'5%'}
          completedTextColor="success"
        />
      </Grid>
    </Grid>
  );
}
