var MovieSchema = new mongoose.Schema({
  Title: String,
  director: String,
  ownDVD: Boolean,
  viewed_at: { type: Date, default: Date.now },
});

var Movie = mongoose.model('Movie', MovieSchema );
Movie.create({Title: 'The Nightmare Before Christmas', ownDVD: true, director: 'Tim Burton'}, function(err, todo){
    if(err) console.log(err);
    else console.log(todo);
});
