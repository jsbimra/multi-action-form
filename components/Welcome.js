import * as React from 'react';
import { withTranslation } from '../i18n';

import './common.scss';
import { useTranslation } from 'react-i18next';

function Welcome(props) {
    const {t} = useTranslation();

    return (
        <div className="text-center comp-welcome">
           {t('common:welcome') ? (<h1>{t('common:welcome')}</h1>) : null}
        </div>
    )
}

export default withTranslation(['common'])(Welcome);