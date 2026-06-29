import axios from "axios";

async function fetchData(title) {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: `${title}`,
        include_adult: "true",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTBhNzcxNGM0NGNjZjllNDNhNTA4ZTJkYzlkMmMzNyIsIm5iZiI6MTc4MTQ0ODY5Mi44Miwic3ViIjoiNmEyZWJmZjQ5MmVjMjZjZjMxOTU0MjdiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wBgQ8yOKj-K4vhNvmmWnX4Ids5UamVrln9u6Vpz-No0",
      },
    };

    const response = await axios.request(options);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default fetchData;
