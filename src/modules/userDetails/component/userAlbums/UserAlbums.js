import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAlbumsData } from '../../userActions/userActions';
import { useParams } from 'react-router-dom';
import './UserAlbums.scss';

const UserAlbums = () => {
  let num = 1;
  const dispatch = useDispatch();
  const { id } = useParams();
  const albums = useSelector(state => state.reducerUserAlbums)
  useEffect(() => {
    dispatch(userAlbumsData(id))
  }, [ dispatch, id ])
  const albumsList = albums.map(album => {
    return (
      <li className="userAlbum" key={album.id}>
        <span className="userAlbum__num">{num++}.</span>
        <span className="userAlbum__title"><b>Title :</b> "{album.title}"</span>
      </li>
    )
  })

  return (
    <ul>
      { albumsList }
    </ul>
  );
}

export default UserAlbums;