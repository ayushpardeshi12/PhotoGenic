const API_KEY = "IY_5GlKWegRjGdEqTauAzaOR7DD8AT_M3QqhrlRu3zk";
export const fetchImages = async (searchTerm, count) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${count}&client_id=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
