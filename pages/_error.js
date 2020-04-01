import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

const Error = ({ statusCode, t }) => (
  <p>
    {statusCode
      ? t('error-with-status', { statusCode })
      : t('error-without-status')}
  </p>
)

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ({ statusCode } = res)
  } else if (err) {
    ({ statusCode } = err)
  }
  return {
    namespacesRequired: ['common', 'rsvp'],
    statusCode,
  }
}

Error.defaultProps = {
  statusCode: null, 
}

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
}

export default withTranslation(['common', 'rsvp'])(Error)

// import React from 'react';

// import { withTranslation } from '../i18n';
// // import { withTranslation } from 'react-i18next';

// class Error extends React.Component {
//   static getInitialProps({ res, err }) {
//     const statusCode = res ? res.statusCode : err ? err.statusCode : null;
//     return {
//       namespacesRequired: ['common'],
//       statusCode
//     }
//   }

//   render() {
//     const { t } = this.props
//     return (
//       <p>
//         {this.props.statusCode
//           ? t('error-with-status', { statusCode: this.props.statusCode })
//           : t('error-without-status')}
//       </p>
//     )
//   }
// }

// export default withTranslation('common')(Error)