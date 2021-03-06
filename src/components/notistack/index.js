import PropTypes from 'prop-types'
import { withSnackbar } from 'notistack'

// classes.variantSuccess:       Styles applied to the snackbar if variant is set to 'success'.
// classes.variantError:                                                   is set to 'error'.
// classes.variantWarning:                                                 is set to 'warning'.
// classes.variantInfo:                                                    is set to 'info'.

export const notifcationSettings = {
  variant: 'success',
  preventDuplicate: true,
  autoHideDuration: 3000,
  resumeHideDuration: 10,
}

export const notificationFunc = ({
  message = 'Message Unknown',
  variant,
  messageOverride,
  enqueueSnackbar,
  closeSnackbar,
  ...props
}) => {
  const displayMessage = messageOverride ? message : message
  enqueueSnackbar(displayMessage, {
    ...notifcationSettings,
    variant,
  })
  return null
}

notificationFunc.propTypes = {
  variant: PropTypes.string.isRequired,
}

export default withSnackbar(notificationFunc)
