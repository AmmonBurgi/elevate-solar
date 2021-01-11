import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Careers from './Components/Careers/Careers'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Landing from './Components/Landing/Landing'
import Science from './Components/Science/Science'
import Talk from './Components/Talk/Talk'

export default(
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/careers' component={Careers} />
        <Route path='/works' component={HowItWorks} />
        <Route path='/science' component={Science} />
        <Route path='/talk' component={Talk} />
    </Switch>
)