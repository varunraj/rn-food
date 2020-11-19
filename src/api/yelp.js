import axios from 'axios';

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers:{
      Authorization:'Bearer ix57FtWAFIJ5A7yLNMvswNvJnZNDSbfDmWF91YI6vTMIvhbdldnEEO80D7fTyjN6Z2raNm0KDeijXzLU9niWsJf-LuGey7Vvv1nrqqAepS1MLgVNw3U4jejFaT61X3Yx'
  }
})