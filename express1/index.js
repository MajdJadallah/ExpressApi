//to create an API with endpoint is movies
//GET -api/movies
const express = require("express");
const fs = require("fs");
let app = express();
const movies = JSON.parse(fs.readFileSync("./data/movies.json"));
//using middleware to send the data make it post inside the req.body
app.use(express.json());
//BEFORE sending the json as response we should formating
const getMovies= (req, res) => {
    //json json formating
    res.json({
      status: "sucsess",
      count : movies.length,
      data: {
        movies: movies,
      },
    });
  }
const getMovie=(req,res)=>{
    //convert the id from string to num
    const id= +req.params.id
    //find the movie based on id
    const movie=movies.find(movie=> movie.id===id);
    if(!movie){
        return res.status(404).json({
            status:"fail",
            message:"the movie with ID "+id+"is not exist"
        })
    }
    res.status(200).json({
        status:"sucess",
        data:{
            movie:movie
        }
    });
}
const editMovie=(req,res)=>{
    const id= +req.params.id
    movieToUpdate=movies.find(movie=> movie.id===id);
    if(!movieToUpdate){
    return res.status(404).json({
        status:"fail",
        message:"no movie object with "+ id +" is found"
    })
}
    const index = movies.indexOf(movieToUpdate);
    Object.assign(movieToUpdate , req.body);
    movies[index] = movieToUpdate;
    fs.writeFile('./data/movies.json', JSON.stringify(movies),(err)=>{
    if (err) {
        return res.status(500).json({
            status: "error",
            message: "An error occurred while updating the movie."
        });
    }
    res.status(200).json({
        status:"sucess",
        data:{
            movie:movieToUpdate
        }
    })
})
}
const deletMovie=(req,res)=>{
    const id =+req.params.id;
    
    movieToDelet=movies.find(movie=>movie.id===id);
    if(!movieToDelet){
        return res.status(404).json({
            status:"fail",
            message:"no movie object with "+ id +" is found to delet"
        })
    }
    const index =movies.indexOf(movieToDelet);
    movies.splice(index,1);
    fs.writeFile('./data/movies.json',JSON.stringify(movies),()=>{
        res.status(204).json({
            status:"sucess",
            data:{
                movie:null
            }
        })
    })
}
const addMovie=(req,res)=>{

    newId=movies[movies.length-1].id +1;
    const  newMovie = Object.assign({id:newId},req.body);
    movies.push(newMovie);

    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        if (err) {
            return res.status(500).json({
                status: "error",
                message: "An error occurred while updating the movie."
            });
        }
        res.status(201).json({
            status:"sucess",
            data:{
                movie:newMovie
            }
        })
        console.log('writing inside the JSON is completing')
    })
    // res.send('created')
}
// app.get("/api/movies",getMovies);
// app.get('/api/movies/:id',getMovie);
// app.patch('/api/movies/:id',editMovie );
// app.delete('/api/movies/:id',deletMovie);
// app.post('/api/movies',addMovie);

app.route("/api/movies")
.get(getMovies)
.post(addMovie);

app.route('/api/movies/:id')
.get(getMovie)
.patch(editMovie)
.delete(deletMovie)

let port = 5000;
app.listen(port, () => {
  console.log("the server on port 5000 is working");
});
