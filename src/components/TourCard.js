import { Box, Grid, Rating, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { AccessTime } from '@mui/icons-material';
function TourCard() {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/44/df/4b/jogg-falls.jpg?w=1200&h=1200&s=1'
          alt='jog falls'
          className='img'
        />
        <Box paddingX={1}>
          <Typography variant='subtitle1' component='h2'>
            Immerse into the falls
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AccessTime
              sx={{
                width: 12.5,
              }}
            />
            <Typography variant='body2' component='p' marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
            marginTop={3}
          >
            <Rating
              name='read-only'
              value={4.5}
              precision={0.5}
              readOnly
              size='small'
            />
            <Typography variant='body2' component='p' marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant='body3' component='p' marginLeft={1.5}>
              (55 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6' component='h3' marginTop={0}>
              From INR 2000
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
  //   return <Paper elevation={3}>Tour </Paper>;
}

export default TourCard;
