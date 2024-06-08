import React from 'react'
import { Container, Button, Typography, Grid, Box, Paper, Rating } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FileUpload from './FileUpload';

const Muicrashcourse = () => {
  return (
    <div className="muicourse" >
        <Container maxWidth="lg" sx={{padding:'50px 0'}}>
            <Grid container spacing={3} >
                <Grid item xs={3} >
                    <Paper elevation={3} sx={{height:'450px', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        {/* Image */}
                            <img src="./pizzas/focaccia.jpg" alt="pizza" style={{width:'100%'}}/>
                        {/* Content Box */}
                        <Box paddingLeft={'10px'}>
                            <Typography fontWeight={'bold'}>Focaccia Pizza</Typography>
                            <Box>
                                <Box display={'flex'}>
                                    <Typography><AttachMoneyIcon sx={{width:'18px'}}/></Typography>
                                    <Typography fontWeight={'bold'}>10</Typography>
                                </Box>
                                <Box marginTop={1} display={'flex'}>
                                    <Rating value={4.5} precision={0.5} readOnly size='small'/>
                                    <Typography fontSize={12} marginLeft={1}>4.5</Typography>
                                    <Typography marginLeft={1} fontSize={10}>(987 reviews)</Typography>
                                </Box>
                                <Box>
                                    <Typography fontSize={12} marginTop={1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, assumenda?</Typography>
                                </Box>
                            </Box>
                        </Box>
                        {/* Button */}
                        <Button variant="contained" color="primary" sx={{fontSize:'12px', marginTop:'10px', width:'100%', borderTopRightRadius:'0', borderTopLeftRadius:'0'}}>
                            Order
                        </Button>
                    </Paper> 
                </Grid>
                <Grid item xs={3} >
                    <Paper elevation={3} sx={{height:'450px', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        {/* Image */}
                        <img src="./pizzas/funghi.jpg" alt="pizza" style={{width:'100%'}}/>
                        {/* Content Box */}
                        <Box paddingLeft={'10px'}>
                            <Typography fontWeight={'bold'}>Focaccia Pizza</Typography>
                            <Box>
                                <Box display={'flex'}>
                                    <Typography><AttachMoneyIcon sx={{width:'18px'}}/></Typography>
                                    <Typography fontWeight={'bold'}>10</Typography>
                                </Box>
                                <Box marginTop={1} display={'flex'}>
                                    <Rating value={4.5} precision={0.5} readOnly size='small'/>
                                    <Typography fontSize={12} marginLeft={1}>4.5</Typography>
                                    <Typography marginLeft={1} fontSize={10}>(987 reviews)</Typography>
                                </Box>
                                <Box>
                                    <Typography fontSize={12} marginTop={1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, assumenda?</Typography>
                                </Box>
                            </Box>
                        </Box>
                        {/* Button */}
                        <Button variant="contained" color="primary" sx={{fontSize:'12px', marginTop:'10px', width:'100%', borderTopRightRadius:'0', borderTopLeftRadius:'0'}}>
                            Order
                        </Button>
                    </Paper> 
                </Grid>
                <Grid item xs={3} >
                    <Paper elevation={3} sx={{height:'450px', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        {/* Image */}
                        <img src="./pizzas/margherita.jpg" alt="pizza" style={{width:'100%'}}/>
                        {/* Content Box */}
                        <Box paddingLeft={'10px'}>
                            <Typography fontWeight={'bold'}>Focaccia Pizza</Typography>
                            <Box>
                                <Box display={'flex'}>
                                    <Typography><AttachMoneyIcon sx={{width:'18px'}}/></Typography>
                                    <Typography fontWeight={'bold'}>10</Typography>
                                </Box>
                                <Box marginTop={1} display={'flex'}>
                                    <Rating value={4.5} precision={0.5} readOnly size='small'/>
                                    <Typography fontSize={12} marginLeft={1}>4.5</Typography>
                                    <Typography marginLeft={1} fontSize={10}>(987 reviews)</Typography>
                                </Box>
                                <Box>
                                    <Typography fontSize={12} marginTop={1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, assumenda?</Typography>
                                </Box>
                            </Box>
                        </Box>
                        {/* Button */}
                        <Button variant="contained" color="primary" sx={{fontSize:'12px', marginTop:'10px', width:'100%', borderTopRightRadius:'0', borderTopLeftRadius:'0'}}>
                            Order
                        </Button>
                    </Paper> 
                </Grid>
                <Grid item xs={3} >
                    <Paper elevation={3} sx={{height:'450px', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        {/* Image */}
                        <img src="./pizzas/prosciutto.jpg" alt="pizza" style={{width:'100%'}}/>
                        {/* Content Box */}
                        <Box paddingLeft={'10px'}>
                            <Typography fontWeight={'bold'}>Focaccia Pizza</Typography>
                            <Box>
                                <Box display={'flex'}>
                                    <Typography><AttachMoneyIcon sx={{width:'18px'}}/></Typography>
                                    <Typography fontWeight={'bold'}>10</Typography>
                                </Box>
                                <Box marginTop={1} display={'flex'}>
                                    <Rating value={4.5} precision={0.5} readOnly size='small'/>
                                    <Typography fontSize={12} marginLeft={1}>4.5</Typography>
                                    <Typography marginLeft={1} fontSize={10}>(987 reviews)</Typography>
                                </Box>
                                <Box>
                                    <Typography fontSize={12} marginTop={1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, assumenda?</Typography>
                                </Box>
                            </Box>
                        </Box>
                        {/* Button */}
                        <Button variant="contained" color="primary" sx={{fontSize:'12px', marginTop:'10px', width:'100%', borderTopRightRadius:'0', borderTopLeftRadius:'0'}}>
                            Order
                        </Button>
                    </Paper> 
                </Grid>
            </Grid>
        </Container>
        {/* Learning Drag and Drop functinality */}
        <Container maxWidth="lg" sx={{padding: '50px 0', border: '2px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FileUpload/>
        </Container>
    </div>
  )
}

export default Muicrashcourse
