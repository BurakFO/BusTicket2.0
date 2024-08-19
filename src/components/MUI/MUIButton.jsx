import React from "react";
import { Button } from "@mui/material";

const MUIButton = ({ label, size, color, onMUIButton }) => {


    return (
        <>
            <div className="w-full">
                <Button 
                onClick={onMUIButton}
                variant="contained" 
                className="w-full" 
                size={size} 
                
                >{label}</Button>

            </div>
        </>
    )
}

export default MUIButton;

// DESCRIPTION
// You can pass the size and label as a props dynamically