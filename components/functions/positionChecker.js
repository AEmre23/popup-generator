  function positionCheck(prop) {
    switch (prop) {
      case '1':
        return ({
          position: 'absolute',
          top: '2%',
          left: '1%',
        })
      case '2':
        return ({
          position: 'absolute',
          top: '2%',
          left: '50%',
          transform: 'translateX(-50%)',
        })
      case '3':
        return ({
          position: 'absolute',
          top: '2%',
          left: '98%',
          transform: 'translateX(-98%)',
        })
      case '4':
        return ({
          position: 'absolute',
          top: '50%',
          left: '1%',
          transform:'translateY(-50%)'
        })
      case '5':
        return ({
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        })
      case '6':
        return ({
          position: 'absolute',
          top: '50%',
          left: '98%',
          transform: 'translate(-98%,-50%)',
        })
      case '7':
        return ({
          position: 'absolute',
          top: '98%',
          left: '1%',
          transform: 'translateY(-98%)',
        })
      case '8':
        return ({
          position: 'absolute',
          top: '98%',
          left: '50%',
          transform: 'translate(-50%,-98%)',
        })
      case '9':
        return ({
          position: 'absolute',
          top: '98%',
          left: '98%',
          transform: 'translate(-98%,-98%)',
        })
      default:
        return ({
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        })
    }
}
  export default positionCheck