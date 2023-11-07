export const FAV = "FAV";
export const REMOVE = "REMOVE";
export const GETJOBS = "GETJOBS";

export const AddToFavAction = (data) => {
  return {
    type: FAV,
    payload: data,
  };
};

export const RemoveToFavAction = (i) => {
  return { type: REMOVE, payload: i };
};

export const GetJobAction = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        let jobs = await response.json();
        dispatch({
          type: GETJOBS,
          payload: jobs,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
