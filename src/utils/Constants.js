
export const options = {
    method: 'GET',
    url: `${import.meta.env.VITE_TMDB_BASE_URL}/genre/movie/list?language=en`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkYzc4NTFlZThkMjcxNjBmMGExNWJjMjU4NmQ3YiIsInN1YiI6IjYzZDhhOWU1ZmVhMGQ3MDA3YzhjMmZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.csg0WPCxRkFkHTDbaWEeqWac0Qj4Qv_FkH14YQN9-Tw`
    }
  };

 
  export const options1 = {
    method: 'GET',
    url: `${import.meta.env.VITE_TMDB_BASE_URL}/movie/now_playing?language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkYzc4NTFlZThkMjcxNjBmMGExNWJjMjU4NmQ3YiIsInN1YiI6IjYzZDhhOWU1ZmVhMGQ3MDA3YzhjMmZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.csg0WPCxRkFkHTDbaWEeqWac0Qj4Qv_FkH14YQN9-Tw`
    }
  };

  export const options2= {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkYzc4NTFlZThkMjcxNjBmMGExNWJjMjU4NmQ3YiIsInN1YiI6IjYzZDhhOWU1ZmVhMGQ3MDA3YzhjMmZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.csg0WPCxRkFkHTDbaWEeqWac0Qj4Qv_FkH14YQN9-Tw'
    }
  };