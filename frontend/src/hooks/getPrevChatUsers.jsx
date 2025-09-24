import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { serverUrl } from '../App'
import { setPrevChatUsers } from '../redux/messageSlice'

const usePrevChatUsers = () => {
  const dispatch = useDispatch()
  const { messages } = useSelector(state => state.message)

  useEffect(() => {
    const fetchPrevChatUsers = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/message/prevChats`, {
          withCredentials: true,
        })
        dispatch(setPrevChatUsers(result.data))
        console.log(result.data)
      } catch (error) {
        console.log(error.response?.data || error.message)
      }
    }

    if (messages) { // optional: prevent fetching if messages not initialized
      fetchPrevChatUsers()
    }
  }, [dispatch, messages])
}

export default usePrevChatUsers
