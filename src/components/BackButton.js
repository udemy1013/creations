import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const BackButton = () => {
  
    return (
        <Link to="/home">
        <Button
            variant="outlined"
            sx={{
              mt: 3,
              borderColor: "red !important",
              color: "red !important",
            }}
            
            className="moveToLeftFromRight"
          >
            back
          </Button>
          </Link>
  )
}

export default BackButton

        