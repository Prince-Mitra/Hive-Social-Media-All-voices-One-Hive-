import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { serverUrl } from '../App'
import { setSuggestedUsers } from '../redux/userSlice'

const useSuggestedUsers = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.user)

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/user/suggested`, {
          withCredentials: true,
        })
        dispatch(setSuggestedUsers(result.data))
      } catch (error) {
        console.log(error.response?.data || error.message)
      }
    }

    if (userData?._id) {
      fetchSuggestedUsers()
    }
  }, [dispatch, userData])
}

export default useSuggestedUsers
