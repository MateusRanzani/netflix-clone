const API_KEY = "59f795837a5dfe769b08efde3cae6bc4";
const API_BASE_URL = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint: any) => {
  const req = await fetch(`${API_BASE_URL}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    const originals = await basicFetch(
      `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
    );

    const trending = await basicFetch(
      `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
    );

    const toprated = await basicFetch(
      `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
    );

    const action = await basicFetch(
      `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
    );

    const comedy = await basicFetch(
      `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
    );

    const horror = await basicFetch(
      `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
    );

    const romance = await basicFetch(
      `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
    );

    const documentary = await basicFetch(
      `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
    );

    return [
      {
        slug: "originals",
        title: "Originais da Matflix",
        items: originals,
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: trending,
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: toprated,
      },
      {
        slug: "Action",
        title: "Ação",
        items: action,
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: comedy,
      },
      {
        slug: "horror",
        title: "Terror",
        items: horror,
      },
      {
        slug: "romance",
        title: "Romance",
        items: romance,
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: documentary,
      },
    ];
  },
  getMovieInfo: async (movieId: any, type: any) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = {};
          break;
      }
    }

    return info;
  },
};
