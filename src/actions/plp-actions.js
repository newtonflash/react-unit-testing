const getDataAction = (data) => {
    return {
        type: "GET_DATA",
        data : data
    }
};

const searchAction = (str) => {
    return {
        type: "SEARCH",
        data: str
    }
};

let cachedStore = {};

const PLPActions = {
    productsData : [],
    getAllProducts : () => {
        return (dispatch) => {
            fetch("products.json")
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    cachedStore = data;
                    dispatch (getDataAction(data));
                });
        }
    },
    searchProductByName : (keyword) => {
        var filteredData = [...cachedStore.products];
        if(keyword !== ""){
            filteredData = filteredData.filter((item)=>{
                return  (item.name.indexOf(keyword) >= 0)
            });
        }

        return (dispatch) => {
            dispatch(searchAction({products:filteredData}));
        }
    }
};


export default PLPActions;
