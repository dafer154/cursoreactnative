import { booksEndpoint } from './endpoints';

//No esta llamada con default, por eso en el index no se coloca default

export const getAllBooks = async () => {
  try {
    let serviceResponse;
    const response = await fetch(booksEndpoint);
    const parsedResponse = await response.json();
    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }
    console.log('Service response', serviceResponse);
    return serviceResponse;
  } catch (error) {
    console.log('Error fetching all books:', error);
    return {
      sucess: false,
      data: error,
    };
  }
};
