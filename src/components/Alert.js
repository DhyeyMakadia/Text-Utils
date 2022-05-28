import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999, maxWidth: '320px' }} data-bs-delay="1500">
      <div id="liveToast" className="toast show fade" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="1500">
        <div className="toast-header">
          <strong className="me-auto">TestUtils</strong>
        </div>
        <div className="toast-body">
          {props.alert.msg}
        </div>
      </div>
    </div>
  )
}
