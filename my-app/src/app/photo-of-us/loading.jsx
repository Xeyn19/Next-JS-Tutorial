import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container spacing={2} wrap="wrap" justifyContent="center">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 320, margin: 1 }}>
          {item ? (
            <img
              style={{ width: '100%', height: 180 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={320} height={180} />
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: 'block', color: 'text.secondary' }}
              >
                {item.channel}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="100%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box
      className="min-h-screen flex flex-col justify-center items-center"
      sx={{ overflow: 'hidden' }}
    >
      <Media loading />
      <Media loading />
    </Box>
  );
}
