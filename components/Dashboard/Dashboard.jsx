import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Dashboard = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/getCourse')
      .then((res) => setCourse(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Grid container spacing={3}>
        {course.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.courseId}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardMedia
                sx={{ height: 140 }}
                image={course.icon}
                title={course.courseTitle}
              />
              <CardContent>
                <Typography variant="h6">Course Title: {course.courseTitle}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {course.courseId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {course.desc}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Duration: {course.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fees: ₹{course.fee}
                </Typography>
              </CardContent>
              <Button variant="contained" sx={{ mr: 2 }}>Add</Button>
            <Button variant="contained">Delete</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;