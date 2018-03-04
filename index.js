var express = require('express');
var path = require('path');


const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const data = {
    navigation: [
        {
            label: "home",
            link : "/"
        },
        {
            label: "about",
            link : "/about"
        },
        {
            label: "contact",
            link : "/contact"
        },
        {
            label: "help",
            link : "/help"
        }
    ]
}

const getUpdatedNavigation = (currentPage , data) => {


    let navigation = data.navigation.map ( (item,index) => {
                if(item.label === currentPage){
                    return Object.assign({}, item, {selected:true})
                }
                return Object.assign({}, item);
           });

    return {navigation};
}


app.get('/', (req, res) => {
    res.render('index', getUpdatedNavigation("home",data));
});



app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => console.log('Example app listening on port 5000!'));