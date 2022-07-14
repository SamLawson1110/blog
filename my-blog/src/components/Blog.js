import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'Upcoming Games', url: 'https://en.wikipedia.org/wiki/God_of_War_Ragnar%C3%B6k' },
  { title: 'Hardware', url: 'https://i.insider.com/57fbbc7f8109eef7018b497e?width=1136&format=jpeg' },
  { title: 'Recent News', url: 'https://cdn.discordapp.com/attachments/939700499039543319/996421590239682661/kirbyceo.png' },
  { title: 'Classic Games', url: 'https://i.ytimg.com/vi/4a10am8kDoA/hqdefault.jpg' },
  { title: 'Free Games', url: 'https://youtu.be/KYxsNJYgrgI' },
  { title: 'Opinion', url: 'https://cdn.discordapp.com/attachments/939700499039543319/996415978957180958/revali.png' },
  { title: 'Science', url: 'https://cdn.vox-cdn.com/thumbor/DguuAZdbrvcEFg4BcSFazw6iESk=/0x0:1360x1021/1200x800/filters:focal(572x403:788x619)/cdn.vox-cdn.com/uploads/chorus_image/image/59621519/GettyImages_82770182.0.jpg' },
];

const mainFeaturedPost = {
  title: 'Top 20 Must Play Games of all Time',
  description:
    "While most games come and go from the public conscious, these games should never be forgotten.",
  image: 'https://www.gematsu.com/wp-content/uploads/2017/12/zp-121941_Shadow-of-the-Colossus_2017_12-09-17_002-scaled.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Why Skyward Sword is a masterpiece, motion controls and all',
    date: '',
    description:
      'Skyward Sword is one of the most hated Zelda games by many, motion controls often cited as the reason. Here\'s why they\'re wrong',
    image: 'https://goombastomp.com/wp-content/uploads/2016/02/The-Legend-of-Zelda-Skyward-Sword-Wii.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'The Hackers that Care More About Nintendo Games than Nintendo Does',
    date: '',
    description:
      'As the years go by, the number of Nintendo games that are unplayable for most audiences piles up. Or at least, they would if it weren\'t for ROMs',
    image: 'https://i1.sndcdn.com/artworks-oWi8qufAVzHSGuxc-iJgrKQ-t500x500.jpg',
    imageLabel: 'Image Text',
  },
];

const posts = [];

const sidebar = {
  title: 'About',
  description:
    ':)',
  archives: [
    { title: 'March 2022', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2019', url: '#' },
    { title: 'November 2016', url: '#' },
    { title: 'October 2013', url: '#' },
    { title: 'September 2010', url: '#' },
    { title: 'August 2008', url: '#' },
    { title: 'November 2003', url: '#' },
    { title: 'June 2000', url: 'https://3.bp.blogspot.com/-xrMLYM8bjMk/WfsD2Uo9ZbI/AAAAAAAADSk/r_mzbFurE608Xoa-YMCI3uZCrXA1up7vgCLcBGAs/s320/Guitar%2BHero%2BSonic%2BVs%2BMario%2B%2528Capa%2Bdo%2Bjogo%2529g.jpg' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1470', url: 'https://cdn.discordapp.com/attachments/939700499039543319/996424860832125088/image.jpg' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Gaming" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}