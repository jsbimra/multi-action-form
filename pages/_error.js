import React from 'react';

import { withTranslation } from '../i18n';
// import { withTranslation } from 'react-i18next';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {
      namespacesRequired: ['common'],
      statusCode
    }
  }

  render() {
    const { t } = this.props
    return (
      <p>
        {this.props.statusCode
          ? t('error-with-status', { statusCode: this.props.statusCode })
          : t('error-without-status')}
      </p>
    )
  }
}

export default withTranslation('common')(Error)