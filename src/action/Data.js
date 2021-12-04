import { FETCH_DATA } from "./Types";

export const getDataFromApi = async (dispatch) => {
    const response = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json");
    response.json().then(res => 
            dispatch({
                type: FETCH_DATA,
                payload: res
            })
        );
}