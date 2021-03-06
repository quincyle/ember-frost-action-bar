/**
 * Component definition for the frost-subcontext-actions component
 */

import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'

import layout from '../templates/components/frost-subcontext-actions'

export default Component.extend({
  // == Dependencies ==========================================================

  // == Keyword Properties ====================================================

  layout,

  // == PropTypes =============================================================

  propTypes: {
    // Required
    subcontentActions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({
          type: PropTypes.string.isRequired
        })
      ]),
      icon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        pack: PropTypes.string
      })
    })).isRequired,

    // Options
    onDispatch: PropTypes.func

    // State
  },

  getDefaultProps () {
    return {
      // Option defaults
      onDispatch: () => {}

      // State defaults
    }
  }

  // == Computed Properties ===================================================

  // == Functions =============================================================

  // == DOM Events ============================================================

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

})
