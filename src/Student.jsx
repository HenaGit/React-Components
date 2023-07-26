export default function Student(props) {
    
    return (
      <div className="container p-4">
        <div className="row">Students Enrolled</div>
        <div className="row border">
          <div className="col-2">
            <img
              src={`https://ui-avatars.com/api/?name=${props.name}`}
              className="w-100" alt='Henk'
            ></img>
          </div>
          <div className="col-10">
          {props.name}
            <br />
            Coding Experience {props.experience} years
          </div>
        </div>
      </div>
    );
  }