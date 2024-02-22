import axios from 'axios';

const unspalshKey = '9ynCvfrx3O4pR5L9uiAALS1hRNs79WzOPAVVG4dCbDA';

export const randomImageAPI = {
  fetchImage: (term: string) => {
    return axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${unspalshKey}`,
      },
      params: {
        query: term,
        orientation: 'landscape',
      },
    });
  },
};
