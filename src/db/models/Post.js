const postSchema = new mongoose.Schema({
  lectureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture",
  },
  date: Date,
  content: String,
});

const Post = mongoose.model("Post", postSchema);
