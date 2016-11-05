import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RegionsMiddleware from './region_middleware';
import PlaceMiddleware from './place_middleware';
import ReviewMiddleware from './review_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RegionsMiddleware,
  PlaceMiddleware,
  ReviewMiddleware
);

export default RootMiddleware;
