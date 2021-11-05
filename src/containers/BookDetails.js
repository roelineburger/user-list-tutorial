import NavBar from "../components/NavBar";

function BookDetails() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <form>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-4">
                <label className="form-label">Author</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-4">
                <label className="form-label">Publish date</label>
                <input type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookDetails;
