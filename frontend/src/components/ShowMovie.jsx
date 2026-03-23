import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const ShowMovie = () => {

  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/show/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/delete/${id}`)
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="col-lg-10">

          <div className="card shadow-lg border-0 rounded-4 p-3">

            <div className="row g-4">

              {/* Poster */}
              <div className="col-md-5">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Details */}
              <div className="col-md-7 d-flex flex-column">

                <h2 className="fw-bold mb-3 text-primary">
                  {movie.title}
                </h2>

                <p className="mb-2">
                  ⭐ <b>{movie.rating}</b>/10
                </p>

                <p className="mb-2">
                  🎭 {movie.genre}
                </p>

                <p className="mb-2">
                  ⏱ {movie.duration} mins
                </p>

                <p className="mb-4">
                  🌐 {movie.language}
                </p>

                {/* Buttons */}
                <div className="mt-auto">

                  <NavLink
                    className="btn btn-warning me-2 rounded-pill px-4"
                    to={`/edit/${id}`}
                  >
                    ✏️ Edit
                  </NavLink>

                  <button
                    className="btn btn-danger me-2 rounded-pill px-4"
                    onClick={handleDelete}
                  >
                    🗑 Delete
                  </button>

                  <NavLink
                    className="btn btn-secondary rounded-pill px-4"
                    to="/"
                  >
                    ⬅ Back
                  </NavLink>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default ShowMovie;