import axios from 'axios';

export {};

let url: string = 
  'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url).then(response => {
  interface Article {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  const data: Article[] = response.data;
  console.log(data);
})