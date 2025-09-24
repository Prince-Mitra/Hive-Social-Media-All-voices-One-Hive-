import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoopData } from '../redux/loopSlice'
import { serverUrl } from '../App'

function GetAllLoops() {
    const dispatch = useDispatch()
    const { userData } = useSelector(state => state.user)

    useEffect(() => {
        const fetchLoops = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/loop/getAll`, {
                    withCredentials: true
                })
                dispatch(setLoopData(result.data))
            } catch (error) {
                console.error(error.response ? error.response.data : error.message)
            }
        }
        fetchLoops()
    }, [dispatch, userData])

    return null // or some JSX if you want to display loops
}

export default GetAllLoops
