import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function MUItabs() {

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="Pzt, 19 Agustos" />
            <Tab label="Sal, 20 Agustos" />
            <Tab label="Car, 21 Agustos" />
        </Tabs>
    );
}