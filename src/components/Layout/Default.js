import React from 'react'

export default function Default (props) {
  return (
    <div style={{
      background: '#F9F7ED',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <img
        width={80}
        style={{
          position: 'absolute',
          top: 30,
          left: 30,
          zIndex: 99
        }}
        alt="logo"
        src={require('../../assets/logo-01.png').default}
      />
      <div style={{
        paddingRight: 30,
        paddingLeft: 30,
        position: 'relative'
      }}>
        {props.children}
      </div>
    </div>
  )
}
