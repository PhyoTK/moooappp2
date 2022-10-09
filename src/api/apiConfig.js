const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '36908693e7db052c9e5650c655406faa',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    videoUrl: 'https://blue-glitter-e23f.phyotk1602.workers.dev/1:/m_english/1917_2019/',
}

export default apiConfig;
