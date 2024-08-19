import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function MUITabs() {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
            sx={{
                '& .MuiTabs-flexContainer': {
                  width:'100%'
                },
                '& .MuiTab-root': {
                    borderRadius: '2px', // Her bir tabin kenarlarini yuvarlar
                    border: '1px solid #ccc', // Tablarin etrafinda bir border ekler
                },
                '& .Mui-selected': {
                    backgroundColor: '#f0f0f0', // Secili tabin arkaplan rengi
                },
            }}
        >
            <Tab label="Pzt, 19 Agustos" />
            <Tab label="Sal, 20 Agustos" />
            <Tab label="Car, 21 Agustos" />
        </Tabs>
    );
}
