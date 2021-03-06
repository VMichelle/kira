import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddInitiative from './AddInitiative'
import InitiativesList from './InitiativesList'
import Container from 'react-bootstrap/Container'

export class InitiativesLayout extends Component {
    render() {
        return (
            <Container className='mt-3'>
                <p>An initiative is a group of epics that drive towards a goal.</p>
                <AddInitiative/>
                <div className='mt-2'></div>
                <InitiativesList/> 
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)
