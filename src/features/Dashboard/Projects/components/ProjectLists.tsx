import { Widget } from '@/components/Widget/Widget';
import { Grid } from '@mui/material';
import React from 'react';
import { FiBriefcase } from 'react-icons/fi';

export default function ProjectLists() {
  return (
    <Grid container columnGap={'25px'}>
      <Grid item xs>
        <Widget name="Project" icon={<FiBriefcase />} colorSchema="primary" />
      </Grid>
      <Grid item xs>
        <Widget name="Project" icon={<FiBriefcase />} colorSchema="success" />
      </Grid>
      <Grid item xs>
        <Widget name="Project" icon={<FiBriefcase />} colorSchema="danger" />
      </Grid>
      <Grid item xs>
        <Widget name="Project" icon={<FiBriefcase />} colorSchema="warning" />
      </Grid>
    </Grid>
  );
}
