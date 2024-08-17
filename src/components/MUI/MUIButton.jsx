import React from "react";
import { Button } from "@mui/material";

const MUIButton = ({ label, size, color }) => {

    return (
        <>
            <div className="w-">
                <Button variant="contained" className="w-full" >{label}</Button>

            </div>
        </>
    )
}

export default MUIButton;

// DESCRIPTION
// You can pass the size and label as a props dynamically