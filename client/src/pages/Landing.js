import React from "react";

// for navbar
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// css
import '../css/Landing.css';

// images
import LandingBackImg from '../img/landing.png'

export default function Landing() {
    const [value, setValue] = React.useState(0);
    return (
        <>
            <div className="grid grid-cols-8">
                <div className="col-span-4" >
                    <h1 className="logo text-[40px] font-bold ml-20 pl-10">Freelancer</h1>
                </div>
                <div className="flex col-span-4 justify-end mr-10 pr-10">
                <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      >
        <BottomNavigationAction label="Home"  />
        <BottomNavigationAction label="About" />
        <BottomNavigationAction label="Contact" />
      </BottomNavigation>
    </Box>
                </div>

            </div>

            {/* contents */}
            <div className="grid grid-cols-8">
            <div className="col-span-3">
                <h1 className="title_man">Experience the future of freelance payments with us!</h1>
                <p className="paragraph">Our platform leverages cutting-edge blockchain technology to revolutionize how freelancers and clients engage. Say goodbye to payment hassles and hello to a simple, secure, and efficient system.
No platform fees, no commissions, no hassle. </p>
            </div>
            <div className="col-span-5"  style={{
 backgroundImage: `url('/img/landing.png')`,    backgroundSize: 'cover', // or 'contain' based on your preference
    backgroundRepeat: 'no-repeat',
    width: '100%', // Add width to the container
    height: '90vh', 
    border: 'none',
}}>
            </div>
            </div>
        </>
    )
    }

    