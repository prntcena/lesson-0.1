import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import ComputerIcon from '@material-ui/icons/Computer';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Dive into the world of Lessons
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            In this era, the world is moving rapidly towards quality content where they can not only learn from others, but also share the learnings to their loved once to secure the ethics, culture and empower them with an ocean of knowledge.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<PeopleAltIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Biographies" btnTitle="Show me More" />
          <Grid icon={<FavoriteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Love tales" btnTitle="Show me More"/>
          <Grid icon={<LocalAtmIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Investment" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<BlurOnIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Fictions" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Technology" btnTitle="Show me More"/>
          <Grid icon={<EmojiFoodBeverageIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Short Sketches" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
