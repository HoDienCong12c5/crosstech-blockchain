import ReduxService from '@/Utils/ReduxService'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const useShowModal = props => {
  const dispatch = useDispatch()
  const showModal = useCallback(
    ( params = {} ) => {
      ReduxService.openModal( { ...props, ...params } )
    },
    [props, dispatch]
  )

  return showModal
}

const useModal = () => {
  const dispatch = useDispatch()
  const hideModal = useCallback( () => {
    ReduxService.closeModal()
  }, [dispatch] )
  return {
    showModal:useShowModal,
    hideModal
  }
}
export default useModal