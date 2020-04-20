import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListner(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseById(id) {
    return _courses.find((course) => course.id === id);
  }
}

const store = new CourseStore();
Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case actionTypes.GET_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    default:
    // nothing to do
  }
});
export default store;
