import { Grid } from '@mui/material';
import React from 'react';

import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
        /* spacing - отступы между колонками */
        <Grid container spacing={3}>
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} />
            ))}
        </Grid>    
    );
};

export default GoodsList;