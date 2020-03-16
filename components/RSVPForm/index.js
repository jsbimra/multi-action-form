import * as React from 'react';
import './rsvp.form.scss';

import RSVPPersonal from './personal';
import RSVPEntity from './entity';
import RSVProxyHolder from './proxy-holder';
import { useOvermind } from '../../overmind';


function RSVPForm(props) {
    const { state, actions } = useOvermind();
    console.log('STATE from RSVP form file ', state);
    console.log('ACTIONS from RSVP form file ', actions);

    const handleRSVPTypeChange = (e) => {
        e.preventDefault();
        // this.setState({ rsvpType: e.target.value });
        actions.rsvp.handleChangeRSVPType(e.target.value);

        console.log('changed triggered!', e.target.value);
    }

    return (
        <div className="rsvp-form-wrapper">

            <h1>{state.rsvp.title}</h1>
            <div className="form-group">
                <label htmlFor="">Select RSVP Type: </label>
                <select className="form-control" value={state.rsvp.selectedType} onChange={ (e) => handleRSVPTypeChange(e)}>
                    {state.rsvp.types.map((type, i) => (<option key={i} value={type.value}>{type.text}</option>))}
                </select>
            </div>
            {/* {'state.rsvp.selectedType : ' + state.rsvp.selectedType} */}
            {state.rsvp.selectedType === 'personal' && <RSVPPersonal props={state.rsvp.personal} />}
            {state.rsvp.selectedType === 'entity' && <RSVPEntity props={state.rsvp.entity} />}
            {state.rsvp.selectedType === 'proxyholder' && <RSVProxyHolder props={state.rsvp.proxyHolder} />}

        </div>
    )
}

export default RSVPForm;