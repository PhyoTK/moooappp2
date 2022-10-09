const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '36908693e7db052c9e5650c655406faa',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
