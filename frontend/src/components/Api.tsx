// YourComponent.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from '../state/actions/apiActions';
import axios from 'axios';

const Api: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest());

      try {
        const response = await axios.get('your-api-endpoint');
        dispatch(fetchDataSuccess(response.data));
      } catch (error) {
        dispatch(fetchDataFailure(error));
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Render your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Api;
