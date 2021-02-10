import React,{useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    objectFit: 'fill'
    
  },
}));

export default function TextMobileStepper({image}) {
  
// only the 1st image is loaded dynamically rest is hard cooded , but can be loaded dynamically as per the data set
 const tutorialSteps = [
    {
        imgPath:image
    },
    {
        imgPath:"https://www.fiveminutesspare.com/DailyQuizzes/wp-content/uploads/sites/35/2019/09/house-letters-numbers-3582b-b-64_1000.jpg"
    },
    {
        imgPath:"https://i.pinimg.com/originals/6f/c4/dc/6fc4dcba85cb89b92f89aed2e22500ce.gif"
    },
    {
        imgPath:"https://previews.123rf.com/images/ornitopter/ornitopter1510/ornitopter151000198/46712409-lightning-letter-d.jpg"
    },
    {
        imgPath:"data:image/jpeg;base64,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"
    },
 ]

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;
    // const maxSteps = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}