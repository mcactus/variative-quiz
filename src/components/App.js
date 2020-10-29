import { Container } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Question from './Question';

const App = () => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={4}>Вопрос №{number}</Grid>
                <Grid item xs={8}>Онлайн-подбор индивидуального тарифа</Grid>
            </Grid>
            <Grid container>
                {questions.map(elem => <Question data={elem}/>)}
                {/* people passed a test */}
                {/* progress */}
            </Grid>
        </>
    );
}

export default App;