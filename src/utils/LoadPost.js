export const dataPosts = async () => {
   const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responsePhotos = await fetch('https://jsonplaceholder.typicode.com/photos');

    // Junta as promises em um array
    const [posts, photos] = await Promise.all([responsePosts, responsePhotos]);

    const postJson = await posts.json();
    const photosJson = await photos.json();

    // Retorna um objeto, copia tudo do objeto post e joga dentro do objeto retornado
    // Criamos um cover e passamos o array de photos, baseado no index do post e passamos a ulr
    const postsAndPhotos = postJson.map((post, index) => {
      return {
        ...post,
        cover: photosJson[index].url
      }
    })

   return postsAndPhotos;
};