import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  GitHubIcon,
  Link
} from '@backstage/core-components';
import { KrknLogoComponent } from './ProjectIcon';
import ImportantLinksList from './ProjectLinkList';

export const ProjectInfoComponent = () => (
  <Page themeId="tool">
    <Header title="Krkn" subtitle="Chaos and resiliency testing tool for Kubernetes">
      <Link to='https://github.com/krkn-chaos/krkn' color="inherit"><GitHubIcon/></Link>
    </Header>
    <Content>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="About Project">
            <KrknLogoComponent width={120} height={120}/>
            <Typography variant="body2" component='div'>
                <Box sx={{ lineHeight: 'normal', m: 1 }}>
                Krkn aka Kraken is a chaos and resiliency testing tool for Kubernetes. Kraken injects deliberate failures into Kubernetes clusters to check if it is resilient to turbulent conditions.
                </Box>
            </Typography>
            <ImportantLinksList/>
          </InfoCard>
        </Grid>
      </Grid>
    </Content>
  </Page>
);
