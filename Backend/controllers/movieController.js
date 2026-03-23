const express = require('express');
const movieModel = require('../models/movie');

exports.addMovies = async (req, res) => {
  const {title, rating, genre, duration, language, posterUrl} =req.body;

  const movie = await movieModel.create({title, rating, genre, duration, language, posterUrl});

  res.status(200).json(movie)
}


exports.showModvies = async (req, res) => {
  const movies = await movieModel.find();

  if (movies != null) {
    res.status(200).json(movies);
  } else {
    res.status(404).json({message:"No movies found"})
  }
}


exports.showSpecificMovie = async(req, res) => {
  const movie = await movieModel.findById(req.params.id);

  if (movie != null) {
    res.status(200).json(movie)
  } else {
    res.status(404).json({message:"movies is not available"})
  }
}


exports.editMovie =async (req, res) => {
 const movie = await movieModel.findByIdAndUpdate(req.params.id, req.body)
 res.status(200).json({message: "movie updated successfully"})
}

exports.deleteMovie = async(req,res) => {
const movie = await movieModel.findByIdAndDelete(req.params.id)
res.status(200).json({message:"movie deleted"})
}