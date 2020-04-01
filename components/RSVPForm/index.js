import './rsvp.form.scss';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

import { useOvermind } from '../../overmind';
import { withTranslation } from '../../i18n';
import { useTranslation } from 'react-i18next';
import { removeCaptcha, scrollOptions } from '../../util';

import RSVPPersonal from './personal';
import RSVPEntity from './entity';
import RSVProxyHolder from './proxy-holder';

import SuccessView from '../SuccessView';
import Loader from '../Loader';

function RSVPForm({title, t}) {
    const { state, actions } = useOvermind();
    // console.log('STATE from RSVP form file ', state);
    // console.log('ACTIONS from RSVP form file ', actions);

    // const { t } = useTranslation();
    const types = t("rsvp:types", { returnObjects: true });
    const personal = t("rsvp:personal", { returnObjects: true });
    const entity = t("rsvp:entity", { returnObjects: true });
    const proxyholder = t("rsvp:proxyholder", { returnObjects: true });

    const successData = {
        title: t("common:successMsgTitle"),
        message: t("common:successMsg")
    }

    const handleRSVPTypeChange = (e) => {
        e.preventDefault();
        // this.setState({ rsvpType: e.target.value });
        actions.rsvp.handleChangeRSVPType(e.target.value);

        // console.log('changed triggered!', e.target.value);

        //update updateSIDKTPVerifedStatus to false 
        actions.rsvp.updateSIDKTPVerifedStatus(false);

        e.target.value == 1 ? actions.rsvp.updateFormState({ type: 'personal', data: personal.data }) : null;
        e.target.value == 2 ? actions.rsvp.updateFormState({ type: 'entity', data: entity.data }) : null;
        e.target.value == 3 ? actions.rsvp.updateFormState({ type: 'proxyholder', data: proxyholder.data }) : null;

        //removeCaptcha first on every change
        // removeCaptcha();
    }

    useEffect(() => {
        scroll.scrollToTop(scrollOptions);
    });
    // console.log( "state.rsvp.selectedType ", typeof state.rsvp.selectedType);

    return (
        <div className="rsvp-form-wrapper" style={{visibility: 'visible'}}>
            {/* {'state.rsvp.isSubmitSuccess value: ' + state.rsvp.isSubmitSuccess} */}

            <h1>{title}</h1>
            {state.rsvp.isSubmitSuccess ? (<SuccessView success={successData} />) :
                (<React.Fragment>
                    <div className="form-group">
                        {/* <label htmlFor="">Select: {state.rsvp.selectedType}</label> */}
                        <select 
                            className="form-control" 
                            value={state.rsvp.selectedType} 
                            onChange={(e) => handleRSVPTypeChange(e)}>
                            {types && typeof types === 'object' ? types.map((type, i) => (<option key={i} value={type.value}>{type.text}</option>)) : null}
                        </select>
                    </div>
                    {/* {'state.rsvp.selectedType : ' + state.rsvp.selectedType} */}
                    {state.rsvp.selectedType == 1 && <RSVPPersonal props={personal} />}
                    {state.rsvp.selectedType == 2 && <RSVPEntity props={entity} />}
                    {state.rsvp.selectedType == 3 && <RSVProxyHolder props={proxyholder} />}
                </React.Fragment>)
            }

            {state.rsvp.isSubmitting ? (<Loader message={t('common:savingForm')} />) : null}
        </div>
    )
}


RSVPForm.getInitialProps = async () => ({
    namespacesRequired: ['common', 'rsvp'],
})

RSVPForm.propTypes = {
    t: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

export default withTranslation(['common', 'rsvp'], {useSuspense: true})(RSVPForm);
