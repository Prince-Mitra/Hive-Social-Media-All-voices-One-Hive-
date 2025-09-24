import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { serverUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import { setCurrentUserStory } from '../redux/storySlice';

const useCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/user/current`, {
          withCredentials: true,
        });
        dispatch(setUserData(result.data));
        dispatch(setCurrentUserStory(result.data.story));
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    fetchUser();
  }, [dispatch]);
};

export default useCurrentUser;
