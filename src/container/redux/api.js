export const get = async url => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const respJSON = await response.json();
        console.log('response : ', [response, respJSON]);
        return respJSON;
      } else {
        return {error: true};
      }
    } catch (error) {
    }
  };