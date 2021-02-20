import React, { Component } from 'react'

import Grid from '../common/layout/grid'

import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            
                <ValueBox cols='12 4' color='dark-grey' icon='usd'
                    value={`R$ ${credit}`} text='Total de Créditos' />
                <ValueBox cols='12 4' color='dark-red' icon='credit-card'
                    value={`R$ ${debt}`} text='Total de Débitos' />
                <ValueBox cols='12 4' color='dark-blue' icon='money'
                    value={`R$ ${credit - debt}`} text='Valor Consolidado' />
            
        </fieldset>
    </Grid>
)