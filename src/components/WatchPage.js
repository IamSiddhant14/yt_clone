import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const attr = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);


  return (
    <div>
      <iframe width="853" height="480" src={"https://www.youtube.com/embed/"+ attr} title="$1 vs $500,000 Plane Ticket!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage;
